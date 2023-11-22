<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-blue-600 text-5xl font-mario">
        這裡是使用pinia的state管理
      </h1>
      <h1 class="text-green-600 text-5xl font-mario">
        注意有使用persist state所以重新整理值不變
      </h1>
      <span class="text-9xl font-semibold text-sky-600">{{ counterStore.count }}</span>
      <div class="mt-8 flex flex-row">
        <button
          class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          @click="counterStore.Increment"
        >
          增加
        </button>
        <button
          class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          @click="counterStore.Decrement"
        >
          減少
        </button>
      </div>
      <div class="mt-8">
        <NuxtLink to="/">
          回首頁
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>
