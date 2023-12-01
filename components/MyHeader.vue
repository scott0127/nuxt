<template>
  <div class="bg-sky-100 flex flex-col">
    <p class="px-6 py-4 text-2xl text-gray-700 border-2 border-black flex items-center">
      <NuxtLink to="/" class="hover:text-4xl bg-gradient-to-r from-black from-3% via-[#ffe0b2] from-7% to-black inline-block text-transparent bg-clip-text">
        回到米奇網首頁
      </NuxtLink>
      <micky_icon />
    </p>
    <p class="absolute top-0 right-0 px-6 py-6 font-mario text-2xl text-red-600 border-1 border-black flex items-center">
      {{ now }}
    </p>
  </div>
</template>

<script setup>
const { now, startClock } = useTime()
onMounted(() => {
  startClock()
})
</script>
