<script setup>
const isOpen = ref(false)
</script>

<template>
  <div>
    <UButton label="Open" @click="isOpen = true" />

    <USlideover v-model="isOpen" class="">
      <div class="p-8 flex-1 border-2 border-black">
        <div class="h-1/6 border-2 border-green-500 flex items-stretch space-x-4">
          <USkeleton class="h-12 w-12 bg-gray-300" :ui="{ rounded: 'rounded-full' }" />
          <div class="space-y-2">
            <USkeleton class="h-4 w-[250px] bg-gray-300 mt-2" />
            <USkeleton class="h-4 w-[200px] bg-gray-300" />
            <USkeleton class="h-4 w-[200px] bg-gray-300" />
            <USkeleton class="h-4 w-[200px] bg-gray-300" />
            <USkeleton class="h-4 w-[200px] bg-gray-300" />
          </div>
        </div>
        <p class="h-1/6 border-2 border-green-500">
          DASDASSD
        </p>
        <p class="h-1/6 border-2 border-green-500">
          DASDASSD
        </p>
        <p class="h-1/6 border-2 border-green-500">
          DASDASSD
        </p>
        <p class="h-1/6 border-2 border-green-500">
          DASDASSD
        </p>
        <p class="h-1/6 border-2 border-green-500">
          DASDASSD
        </p>
      </div>
    </USlideover>
  </div>
</template>
