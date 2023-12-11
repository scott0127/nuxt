<template>
  <div>
    <!-- Hero Section -->
    <div class="md:mt-20 rounded-3xl sm:mb-8  w-full" style="background-color: ;">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center border-none border-black">
        <div class="w-full sm:w-full lg:scale-150 md:pl-20 pl-12 sm:ml-10 xl:ml-0 border-none border-black ">
          <h2 class="xl:text-4xl sm:text-4xl sm:text-white xl:text-stone-700 text-3xl font-semibold text-stone-700 mb-4">
            Welcome to My Blog<br>
            <span class="leading-relaxed bg-white sm:text-stone-700">這邊是<span class="text-white bg-stone-700">林米奇的第一站</span></span><br>
            <span class="">部落格</span>
          </h2>
          <p class="text-white text-lg leading-relaxed">
            這裡目前還很無聊啥都沒有，<br>但可以幫我點個讚我會很開心x
            <br>站長是一個熱愛學習的人，<br>喜歡學習新的事物，<br>也喜歡分享自己的學習心得，<br>如果你也喜歡學習，
            歡迎你來到這裡，<br>我們一起學習吧！<br>Recently Challenge <br> YOLOV8 Nuxt Vue 大專生計畫
            <br>
          </p>
        </div>
        <div class="relative w-full px-10 sm:py-10 sm:w-1/2 sm:mt-0">
          <Swiper v-bind="swiperConfig" class="mt-20">
            <SwiperSlide><img src="~/assets/images/metwo.jpg" class="img rounded-lg"></SwiperSlide>
            <SwiperSlide><img src="~/assets/images/uni.jpg" class="img rounded-lg"></SwiperSlide>
            <SwiperSlide><img src="~/assets/images/camera.jpg" class="img rounded-lg"></SwiperSlide>

            <SwiperController direction="上面一位" />
            <SwiperController2 direction="下面一位" />
          </Swiper>
          <Icon name="fxemoji:fatherchristmas" class="absolute z-10 left-6 bottom-16 -rotate-45" width="35" height="35" />
          <Icon name="streamline-emojis:christmas-tree" class="absolute z-10 left-28 bottom-16 -rotate-45" width="35" height="35" />
        </div>
      </div>
    </div>
    <IndexComponertsMidContent class="sm:left-28 xl:left-0" />

    <div
      id="暫時block暫時被我隱藏"
      class="w-full md:mb-10 md:mt-0 rounded-3xl mt-60 mb-32 hidden"
      style="border: white  10px;height: 370px; border-style: ridge;
border-color: #e8e8e8 #f5f5f5 #f5f5f5 #e8e8e8;
border-width: 10px;"
    >
      <UIComponentLinkMap />
    </div>
    <div class="border-none border-black xl:left-0 scale-50 sm:scale-100 mt-60 sm:mt-0">
      <ShareBar style="scale: 1.5;" class="absolute top-80 -left-8 sm:top-6 sm:right-24 lg:top-6 lg:right-20 lg:left-1/2 sm:scale-75 sm:mr-8 xl:scale-100 xl:mr-0" />
      <div
        style="width:340px;height: 70px;"
        class="bg-black flex items-center justify-center mb-4 sm:ml-20 xl:ml-0
      absolute sm:relative top-52 -left-40 sm:top-0 sm:left-0"
      >
        <p class="text-3xl text-white font-semibold" style="font-weight: bold;">
          Press <span class="text-green-400">Spotify</span>
        </p>
      </div>
      <div
        style="width:400px;height: 70px;"
        class="bg-black flex items-center justify-center
      sm:ml-20 xl:ml-0 absolute sm:relative top-52 left-52 sm:left-0 sm:top-0"
      >
        <p class="text-3xl text-white font-semibold" style="font-weight: bold;">
          Listen My favorite playlist
        </p>
      </div>
    </div>

    <!-- Sections -->
    <div class="border-none border-black container  sm:my-32 sm:scale-75 lg:scale-90 xl:scale-100 scale-75">
      <div class="flex flex-row items-center space-x-3 pt-5 pb-8">
        <Icon name="mdi:star-three-points-outline" size="2em" class="text-white dark:text-zinc-300  " />
        <h2 class="text-4xl font-semibold text-white dark:text-zinc-300   ">
          Recent Post
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 sm:gap-14">
        <UIComponentCardComponet />
        <UIComponentCardComponet />
        <UIComponentCardComponet />
      </div>
    </div>
    <NuxtLink to="https://tailwindcomponents.com/component/button-hover-effects" class="border-2 border-black">
      這裡有css tailwind特效網址
    </NuxtLink>
  </div>
</template>

<script setup>
const swiperConfig = {
  modules: [
    SwiperNavigation,
    SwiperEffectCreative
  ],
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    545: {
      slidesPerView: 1
    },
    1080: {
      slidesPerView: 1
    },
    1280: {
      slidesPerView: 1
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
