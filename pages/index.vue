<template>
  <div>
    <!-- Hero Section -->
    <div class="bg-gray-800 md:pt-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col sm:flex-row items-center">
        <div class="w-full sm:w-1/2 pr-8">
          <h2 class="text-4xl font-semibold text-white mb-4">
            Welcome to My Blog<br>
            這邊是ㄎㄅ的<span class="text-purple-500">一號機</span>Blog
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed">
            這裡目前還很無聊啥都沒有，<br>但可以幫我點個讚我會很開心x
            <br>
          </p>
        </div>
        <div class="relative w-full px-10 py-10 sm:w-1/2 sm:mt-0">
          <Swiper v-bind="swiperConfig">
            <SwiperSlide><img src="~/assets/images/metwo.jpg"></SwiperSlide>
            <SwiperSlide><img src="~/assets/images/kbk.jpg"></SwiperSlide>
            <SwiperSlide><img src="~/assets/images/camera.jpg"></SwiperSlide>
            <SwiperSlide><img src="~/assets/images/mario.jpg"></SwiperSlide>

            <SwiperController direction="上面一位" />
            <SwiperController2 direction="下面一位" />
          </Swiper>
          <Icon name="fxemoji:fatherchristmas" class="absolute z-10 left-6 bottom-16 -rotate-45" width="35" height="35" />
          <Icon name="streamline-emojis:christmas-tree" class="absolute z-10 left-28 bottom-16 -rotate-45" width="35" height="35" />
        </div>
      </div>
    </div>
    <a href="database">
      <button class="before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
        <span relative="relative z-10">按下去到酥皮濃湯的DATABASE專題</span>
      </button>
    </a>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id iaculis justo.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id iaculis justo.
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
    <UIComponentSlideLeft />
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
img {
  --s: 10px; /* control the size */
  padding: var(--s);
  border: calc(2*var(--s)) solid #ff040400;
  outline: 1px solid green;
  outline-offset: calc(-1*var(--s));
  background: conic-gradient(from 90deg at 1px 1px,white 25%,red 0);
}
</style>
