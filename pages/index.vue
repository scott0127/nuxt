<template>
  <div class="bg-red-700 py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-white">
        這裡是首頁
      </h1>
      <div class="my-4 flex space-x-4 text-white">
        <div class="border-white border-2 px-4">
          <NuxtLink to="/about">
            前往 About
          </NuxtLink>
        </div>
        <div class="border-white border-2 px-4">
          <NuxtLink to="/contact">
            前往 Contact
          </NuxtLink>
        </div>
        <div class="border-white border-2 px-4">
          <NuxtLink to="/custom">
            前往 custom layout的網頁
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
