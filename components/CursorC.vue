<template>
  <div
    class="absolute bg-green-500/30 rounded-full
      -translate-x-1/2 -translate-y-1/2"
    :style="
      {left: `${x}px`
       , top:`${y}px`
       , width: '200px'
       , height: '200px'
      }"
  />
</template>
<script setup>
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()
</script>
