<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-8xl font-semibold text-red-500">
        404
      </h1>
      <p class="my-8 text-3xl text-gray-800">
        Not Found
      </p>
      <p class="text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-white">
        真的是找不到這個頁面啦www
      </p>
      <NuxtLink
        to="https://www.instagram.com/lin_michi50/"
        target="_blank"
        rel="noopener"
      >
        <p class="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          但可以來我IG逛逛(點下去)
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
setResponseStatus(404)
</script>
