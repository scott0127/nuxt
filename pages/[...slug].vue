<template>
  <div class="bg-white py-24 w-3/5">
    <div class="flex flex-col items-center">
      <h1 class="text-8xl font-semibold text-red-500">
        EXIST
      </h1>
      <p class="my-8 text-3xl text-gray-800">
        BLOG SINGLE PAGE
      </p>
      {{'nuxt'+route.path}}
      <main class="border-2 border-green-500 w-full flex  flex-col items-center">
        <ContentDoc  :path="'/nuxt'+route.path">
        </ContentDoc>
      </main>

    </div>
  </div>
</template>

<script setup>
const route = useRoute();
console.log(route.params.slug);
</script>
