import { access, readdir, readFile, writeFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { promisify } from 'node:util'
import { brotliCompress, constants, gzip } from 'node:zlib'
import Beasties from 'beasties'

const gzipAsync = promisify(gzip)
const brotliAsync = promisify(brotliCompress)

// compressPublicAssets precompresses at build time, so any .gz/.br sibling is
// stale the moment we rewrite the HTML — Nitro would serve the old bytes.
async function recompress(file, contents) {
  for (const [ext, compress] of [
    ['.gz', () => gzipAsync(contents, { level: 9 })],
    ['.br', () => brotliAsync(contents, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } })],
  ]) {
    try {
      await access(file + ext)
    }
    catch {
      continue
    }
    await writeFile(file + ext, await compress())
  }
}

const PUBLIC_DIR = new URL('../.output/public/', import.meta.url).pathname

async function htmlFiles(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...await htmlFiles(path))
    else if (entry.name.endsWith('.html')) out.push(path)
  }
  return out
}

const beasties = new Beasties({
  path: PUBLIC_DIR,
  publicPath: '/',
  preload: 'swap',
  pruneSource: false,
  logLevel: 'silent',
})

const files = await htmlFiles(PUBLIC_DIR)
let total = 0

for (const file of files) {
  const before = await readFile(file, 'utf8')
  const after = await beasties.process(before)
  await writeFile(file, after)
  await recompress(file, after)
  total += after.length - before.length
  console.log(`  ${relative(PUBLIC_DIR, file)} ${(before.length / 1024).toFixed(1)} → ${(after.length / 1024).toFixed(1)} KiB`)
}

console.log(`critical CSS inlined in ${files.length} page(s), ${(total / 1024).toFixed(1)} KiB added`)
