export function useCanonical() {
  const siteConfig = useSiteConfig()
  const route = useRoute()

  const siteUrl = siteConfig.url.replace(/\/$/, '')
  const path = route.path.replace(/\/$/, '')
  const pageUrl = `${siteUrl}${path}`

  return { siteUrl, pageUrl }
}
