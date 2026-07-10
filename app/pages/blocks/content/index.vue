<script setup lang="ts">
import * as demo from './_partials/demo-content'

useSeoMeta({
  title: 'Content — variants',
  robots: 'noindex, nofollow',
})
</script>

<template>
  <div>
    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content1
    </div>
    <SectionsContent1 v-bind="demo.content1" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content2
    </div>
    <SectionsContent2 v-bind="demo.content2" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content3
    </div>
    <SectionsContent3 v-bind="demo.content3" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content4
    </div>
    <SectionsContent4 v-bind="demo.content4" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content5
    </div>
    <SectionsContent5 v-bind="demo.content5" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content6
    </div>
    <SectionsContent6 v-bind="demo.content6" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content7
    </div>
    <SectionsContent7 v-bind="demo.content7" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content8
    </div>
    <SectionsContent8 v-bind="demo.content8" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content9
    </div>
    <SectionsContent9 v-bind="demo.content9" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content10
    </div>
    <SectionsContent10 v-bind="demo.content10" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content11
    </div>
    <SectionsContent11 v-bind="demo.content11" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content12
    </div>
    <SectionsContent12 v-bind="demo.content12" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content13
    </div>
    <SectionsContent13 v-bind="demo.content13" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content14
    </div>
    <SectionsContent14 v-bind="demo.content14" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content15
    </div>
    <SectionsContent15 v-bind="demo.content15" />

    <div class="sticky top-0 z-50 bg-inverted px-4 py-1.5 text-center font-mono text-xs font-bold tracking-widest text-toned-inverted">
      Content16
    </div>
    <SectionsContent16 v-bind="demo.content16" />
  </div>
</template>
