<template>
  <div class="bg-blue-700 py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-white">
        這裡是state首頁
      </h1>
      <div class="my-4 flex space-x-4 text-white">
        <div class="border-white border-2 px-4">
          <NuxtLink to="/state-pratice/increment">
            前往 increment
          </NuxtLink>
        </div>
        <div class="border-white border-2 px-4">
          <NuxtLink to="/state-pratice/shareState">
            前往 shareState
          </NuxtLink>
        </div>
        <div class="border-white border-2 px-4">
          <NuxtLink to="/state-pratice/counter">
            前往 counter
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
