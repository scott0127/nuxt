<script setup>
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()

</script>

<template>
  <div class="bg-white flex flex-col overflow-hidden relative" @scroll="checkScrollState">
    <div class="">
      <MyNavigate class="md:fixed md:w-screen md:z-50" />
      <div
        class="absolute rounded-full hidden md:block
      -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50
      "
        :style="
          {left: `${x}px`
           , top:`${y}px`
           , width: '40px'
           , height: '40px'
           , //background: '#00FFFF'
          }"
      >
        <Icon name="line-md:sunny-outline-twotone-loop" width="50" height="50" />
      </div>
      <div
        class="absolute rounded-full hidden
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
      <div class="//bg-[url('https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg')]  bg-fixed ddbody">
        <div class="min-h-screen md:flex md:justify-center md:mt-30 sm:scale-75 lg:scale-100">
          <slot />
        </div>
      </div>
      <MyFooter />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:200');

.ddbody  {
    background-image: url('https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg');
  background-size:cover;
        -webkit-animation: slidein 100s;
        animation: slidein 100s;

        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;

        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;

        -webkit-animation-direction: alternate;
        animation-direction: alternate;
}

@-webkit-keyframes slidein {
from {background-position: top; background-size:3000px; }
to {background-position: -100px 0px;background-size:2750px;}
}

@keyframes slidein {
from {background-position: top;background-size:3000px; }
to {background-position: -100px 0px;background-size:2750px;}

}
</style>
