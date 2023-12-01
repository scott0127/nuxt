<script setup>
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>

<template>
  <div class="bg-sky-100 flex flex-col overflow-hidden relative" @scroll="checkScrollState">
    <div ref="el">
      <MyNavigate class="md:fixed md:w-screen md:z-50" />
      <div
        class="absolute rounded-full
      -translate-x-1/2 -translate-y-1/2 pointer-events-none
      blur-3xl"
        :style="
          {left: `${x}px`
           , top:`${y}px`
           , width: '200px'
           , height: '200px'
           , background: 'radial-gradient(circle, rgba(214, 214, 214, 1) 0%, rgba(166, 166, 166, 1) 100%)'
          }"
      />
      <div class="flex-1">
        <div class="min-h-screen">
          <slot />
        </div>
      </div>
      <MyFooter />
    </div>
  </div>
</template>
