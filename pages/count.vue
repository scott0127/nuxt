<template>
  <div class="flex flex-col items-center">
    <span class="mt-8 text-4xl text-gray-700">{{ count }}</span>
    <button
      class="my-6 rounded-sm bg-sky-600 py-2 px-4 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
      @click="increament"
    >
      增加 1
    </button>
    <button
      class="my-6 rounded-sm bg-sky-600 py-2 px-4 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
      @click="startClock"
    >
      取得時間
    </button>
    <span class="mt-8 font-mario text-4xl text-red-700">{{ now }}</span>
    <div class="flex justify-center">
      <Icon name="arcticons:super-mario-run" color="#ff1851" size="360" />
    </div>
    <h1 class="text-4xl font-mario text-slate-900">
      產生隨機數:{{ randNumber }}
    </h1>
  </div>
</template>

<script setup>
const { count, increament } = useCounter()
const { now, startClock } = useTime()
const randNumber = useState('rand', () => Math.round(Math.random() * 1000))
</script>
