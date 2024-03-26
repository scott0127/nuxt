<template>
  <div id="head" class="flex flex-col group border dark:border-gray-800 bg-gray-100 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300 scale-110">
    <img 
      class="self-center border-2 rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500"
      :src=image
      style="height: 190px;object-fit: cover;width: 340px;"
    />
    <!--我是註解  flex用align grid 用justify -->
    <div class="px-3 pb-4 bg-gray-100">
      <div class="text-black dark:text-zinc-300    pt-3 pb-2">
        <div class="flex items-center">
          <LogoDate />
          2024/03/25
        </div>
        <div class="flex items-center gap-1 flex-wrap">
          <LogoTag />
          {{category}}
        </div>
      </div>
      <h2 class="text-xl font-semibold  text-black dark:text-zinc-300   pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400">
        {{title}}
      </h2>
      <p class="text-ellipsis line-clamp-2 text-base">
        {{content}}
      </p>
      <div class="flex bottom-2 absolute group-hover:underline text-sky-700 dark:text-sky-400 items-center py-2">
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
  category: String,
  slug:String,
})

</script>