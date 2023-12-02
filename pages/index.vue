<template>
  <div>
    <!-- Hero Section -->
    <div class="md:mt-20 rounded-3xl mb-20 w-full" style="background-color: #DABEA7;">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col sm:flex-row items-center">
        <div class="w-full sm:w-1/2 pr-8 pl-20">
          <h2 class="text-4xl font-semibold text-stone-700 mb-4">
            Welcome to My Blog<br>
            這邊是<span class="text-white bg-stone-700">林米奇的第一站</span><br>部落格
          </h2>
          <p class="text-gray-900 text-lg leading-relaxed">
            這裡目前還很無聊啥都沒有，<br>但可以幫我點個讚我會很開心x
            <br>
          </p>
        </div>
        <div class="relative w-full px-10 py-10 sm:w-1/2 sm:mt-0">
          <Swiper v-bind="swiperConfig">
            <SwiperSlide><img src="~/assets/images/metwo.jpg" class="img rounded-lg"></SwiperSlide>
            <SwiperSlide><img src="~/assets/images/kbk.jpg" class="img rounded-lg"></SwiperSlide>
            <SwiperSlide><img src="~/assets/images/camera.jpg" class="img rounded-lg"></SwiperSlide>
            <SwiperSlide><img src="~/assets/images/mario.jpg" class="img rounded-lg"></SwiperSlide>

            <SwiperController direction="上面一位" />
            <SwiperController2 direction="下面一位" />
          </Swiper>
          <Icon name="fxemoji:fatherchristmas" class="absolute z-10 left-6 bottom-16 -rotate-45" width="35" height="35" />
          <Icon name="streamline-emojis:christmas-tree" class="absolute z-10 left-28 bottom-16 -rotate-45" width="35" height="35" />
        </div>
      </div>
    </div>
    <div class="bg-white border-2 border-white mb-20 relative" style="width:1100px;height: 570px;">
      <div class="border-2 border-black w-1/2 h-full">
        <img src="~/assets/images/aigen.png" class="w-1/2 h-full absolute">
        <div style="width:600px;height: 155px;left: 40%;top: 10%;" class="absolute">
          <div style="width:520px;height: 70px;" class="bg-gray-300 mb-4 flex items-center justify-center">
            <p class="text-3xl text-white" style="font-weight: bold;">
              Creativity is intelligence having fun.
            </p>
          </div>
          <div style="width:480px;height: 70px;" class="bg-gray-300 ml-2" />
        </div>
        <div style="width:530px;height: 380px;left: 50%;top: 10%;" class="absolute border-2 border-black">
          <div style="width:470px;height: 105px;left: 0%;top: 40%;" class="absolute border-2 border-black mt-12 flex items-center">
            <p class="pl-4 font-Playpen">
              A three-part resource to walk you through exploring<br>
              what a simple and spacious business actually looks<br>
              like for you and how you can make it your reality too.
            </p>
          </div>
          <div style="width:470px;height: 55px;left: 0%;top: 70%;" class="absolute border-2 border-black mt-12" />
        </div>
      </div>
    </div>
    <div
      id="暫時block"
      class="w-full md:mb-10 rounded-3xl"
      style="border: white  10px;height: 370px; border-style: ridge;
border-color: #e8e8e8 #f5f5f5 #f5f5f5 #e8e8e8;
border-width: 10px;"
    />
    <ShareBar />
    <!-- Sections -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-4xl font-semibold mb-20">
        下次更新這裡，我在不睡覺要死嘞<br>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="bg-blue-100 rounded-lg shadow-lg overflow-hidden">
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-4">
              Section 1
            </h3>
            <p class="text-gray-600">
              這邊很醜，我知道，但我不會改x<br> 我下次改
            </p>
          </div>
        </div>
        <div class="bg-purple-100 relative rounded-lg shadow-lg overflow-hidden md:bottom-10">
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-4">
              Section 2
            </h3>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id iaculis justo.
            </p>
          </div>
        </div>
        <div class="bg-green-100 rounded-lg shadow-lg overflow-hidden">
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-4">
              Section 3
            </h3>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id iaculis justo.
            </p>
          </div>
        </div>
        <div class="bg-yellow-100 rounded-lg shadow-lg overflow-hidden">
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-4">
              Section 4
            </h3>
            <p class="text-gray-600">
              asdsadasdsadsagfadnfiuhjkiWFJKLKJHKJ
            </p>
          </div>
        </div>
        <div class="bg-red-100 rounded-lg shadow-lg overflow-hidden relative md:top-10">
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-4">
              Section 5
            </h3>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id iaculis justo.
            </p>
          </div>
        </div>
        <div class="bg-pink-100 rounded-lg shadow-lg overflow-hidden">
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-4">
              Section 6
            </h3>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id iaculis justo.
            </p>
          </div>
        </div>
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
.img {
  --s: 10px; /* control the size */
  padding: var(--s);
  border: calc(2*var(--s)) solid #ff040400;
  outline: 1px solid green;
  outline-offset: calc(-1*var(--s));
  background: conic-gradient(from 90deg at 1px 1px,white 25%,red 0);
}
</style>
