<template>
  <div class="bg-sky-100">
    <p class="px-6 py-4 text-2xl text-gray-700 border-2 border-black flex items-center">
      <NuxtLink to="/" class="hover:text-4xl bg-gradient-to-r from-black from-3% via-[#ffe0b2] from-7% to-black inline-block text-transparent bg-clip-text">
        回到米奇網首頁
      </NuxtLink>
      <micky_icon />
    </p>
    <p class="absolute top-0 right-0 px-6 py-6 font-mario text-2xl text-red-600 border-1 border-black flex items-center">
      {{ now }}
    </p>
    <slot />
    <footer class="fixed bottom-0 left-0 w-full bg-[url('~/assets/images/pxfuel.jpg')] bg-fixed text-white py-16">
      <div class="flex flex-row container mx-auto grid grid-cols-2 md:grid-cols-5 gap-36">
        <div class="footer-left col-span-3">
          <h4 class="text-lg font-bold mb-4 inline-block">
            <p class="border-b-2 border-cyan-400 hover:border-purple-400">
              我的社交帳號
            </p>
          </h4>
          <div class="flex flex-row gap-2">
            <div class="flex flex-row gap-2">
              <a href="#"><img src="~/assets/images/facebook.png" class="w-6 h-6"></a>
              <a href="#"><img src="~/assets/images/Googlell.png" class="w-6 h-6"></a>
              <a href="#"><img src="~/assets/images/twitter.png" class="w-6 h-6"></a>
              <a href="https://www.instagram.com/lzy_pakkkk/" class="w-6 h-6"><img src="~/assets/images/instagram.png"></a>
            </div>
          </div>
          <h4
            class="text-sm font-light mt-14 animate-text
            hover:bg-gradient-to-r hover:from-teal-500 hover:via-purple-500
            hover:to-orange-500 hover:bg-clip-text hover:text-transparent font-black
            hover:text-xl hover:font-extrabold
            transiton-300"
          >
            This website is managed by LIN_MICKEY
          </h4>
        </div>
        <div class="footer-right border-l-2 pl-14">
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-bold mb-4">
              If you have questions
            </h4>
            <h4 class="text-lg font-bold mb-4">
              contact me at:
            </h4>
            <h4 class="text-lg font-bold mb-4">
              scott5497ify@gmail.com
            </h4>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { now, startClock } = useTime()
onMounted(() => {
  startClock()
})
</script>
