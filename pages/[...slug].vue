<template>
  <div class="bg-white pt-48 pb-8 w-full grid place-items-center">
    <div class="max-w-7xl w-full bg-white rounded-lg overflow-hidden">
      <div class="px-8 py-6">
        <h1 class="text-4xl font-semibold text-red-500 mb-4 text-center">
          EXIST
        </h1>
        <p class="text-xl text-gray-600 text-center">
          BLOG SINGLE PAGE<br>
          {{ 'nuxt' + route.path }}
        </p>
      </div>
    </div>
    <article class="w-max bg-white rounded-lg prose prose-blockquote:border-green-400 prose-blockquote:not-italic prose-quoteless">
      <ContentDoc :path="'/nuxt' + route.path"></ContentDoc>
    </article>
  </div>
</template>

<script setup>
const route = useRoute();
console.log(route.params.slug);
</script>
