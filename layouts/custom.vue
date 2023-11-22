<template>
  <div class="bg-sky-100">
    <p class="px-6 py-4 text-2xl text-gray-700 border-2 border-black flex items-center">
      <NuxtLink to="/" class="hover:text-4xl text-green-500">
        這邊是冬瓜網
      </NuxtLink>
      <winter_melon />
    </p>
    <slot />
  </div>
</template>
