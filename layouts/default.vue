<script setup>
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()

</script>

<template>
  <div class="bg-white flex flex-col overflow-hidden relative" @scroll="checkScrollState">
    <div class="">
      <MyNavigate class="md:fixed md:w-screen md:z-50" />
      <div
        class="absolute rounded-full
      -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50
      "
        :style="
          {left: `${x}px`
           , top:`${y}px`
           , width: '10px'
           , height: '10px'
           , background: '#00FFFF'
          }"
      />
      <div
        class="absolute rounded-full
      -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50
      "
        :style="
          {left: `${x}px`
           , top:`${y}px`
           , width: '40px'
           , height: '40px'
           , background: ''
           , border: '1px solid black'
          }"
      />
      <div class="bg-[url('~/assets/images/back.jpg')]  bg-fixed">
        <div class="min-h-screen border-2 md:flex md:justify-center">
          <slot />
        </div>
      </div>
      <MyFooter />
    </div>
  </div>
</template>
