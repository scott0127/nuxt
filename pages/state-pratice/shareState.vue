<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <span class="text-9xl font-semibold text-sky-600">{{ counter }}</span>
      <div class="mt-8 flex flex-row">
        <button
          class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          @click="counter++"
        >
          增加
        </button>
        <button
          class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          @click="counter--"
        >
          減少
        </button>
      </div>
      <p class="mt-14 text-slate-500">
        這是共享state的網頁 重新整理會隨機數
      </p>
      <div class="mt-8">
        <NuxtLink to="/state-pratice">
          回首頁
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>
