<template>
  <div id="head" class="group border dark:border-gray-800 bg-gray-100  m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300 scale-110">
    <NuxtImg
      class="border-2 border-white lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500"
      width="300"
      :src="image"
    />
    <div class="px-3 pb-4 border-2  bg-gray-100">
      <div class="text-black dark:text-zinc-300    pt-3 pb-2">
        <div class="flex items-center">
          <LogoDate />
          2023/12/05
        </div>
        <div class="flex items-center gap-1 flex-wrap">
          <LogoTag />
          nuxt nuxt-componet分類
        </div>
      </div>
      <h2 class="text-xl font-semibold  text-black dark:text-zinc-300   pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400">
        這邊是標題{{title}}
      </h2>
      <p class="text-ellipsis line-clamp-2 text-base">
        以下是範例內文{{content}}
      </p>
      <div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center py-2">
        {{slug}}
        <NuxtLink :to="slug">(詳細頁面)</NuxtLink>
        <LogoArrow />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route=useRoute();
defineProps({
  image: String,
  title: String,
  content: String,
  slug:String,
})

</script>