<template>
  <div>
    <!-- Hero Section -->
    <div class="md:mt-20 rounded-3xl sm:mb-8  w-full" >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center border-none border-black">
        <div class="w-full sm:w-full lg:scale-150 md:pl-20 pl-12 sm:ml-10 xl:ml-0 border-none border-black ">
          <h2 class="xl:text-4xl sm:text-4xl sm:text-white xl:text-stone-700 text-3xl font-semibold text-stone-700 mb-4">
            Welcome to My Blog<br>
            <span class="leading-relaxed bg-white sm:text-stone-700">這邊是<span class="text-white bg-stone-700">林米奇的第一站</span></span><br>
            <span class="">部落格</span>
          </h2>
          <p class="text-white text-lg leading-relaxed">
            這裡目前還越來越多東西啦，<br>可以幫我點個讚我會很開心x
            <br>站長是一個熱愛學習的人，<br>喜歡學習新的事物，<br><span class="text-purple-500">最近打算更新第一篇教學文</span><br>如果你也喜歡學習，
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
          <Icon name="fxemoji:fatherchristmas" class="absolute z-10 left-6 bottom-8 md:bottom-16 -rotate-45" width="35" height="35" />
          <Icon name="streamline-emojis:christmas-tree" class="absolute z-10 left-28 bottom-8 md:bottom-16 -rotate-45" width="35" height="35" />
        </div>
      </div>
    </div>
    
    <iframe class="mb-16" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2YPet8qyOLDQ55qaHn1uTV?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
        <Icon name="line-md:star-pulsating-twotone-loop" size="2em" class="text-black bg-stone-300 dark:text-zinc-300  " />
        <h2 class="text-4xl font-semibold text-white dark:text-zinc-300   ">
          Recent Post
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 sm:gap-14">
        <UIComponentCardComponet2 :slug="article[2]['singlePage_route']" category="Oauth,nuxt,supabase" :image="article[2]['image_route']" :content="article[2]['content']" :title="article[2]['title']"/>
        <UIComponentCardComponet />
        <UIComponentCardComponet />
      </div>
    </div>

    <div class="flex flex-row items-center space-x-3 pt-5 pb-8">
      <Icon name="line-md:star-pulsating-twotone-loop" size="2em" class="text-black bg-stone-300 dark:text-zinc-300  " />
      <h2 class="text-4xl font-semibold text-white dark:text-zinc-300   ">
        米奇GPT(目前沒有對外域名，暫時無效)
      </h2>
    </div>
    <iframe 
      class="border-4 border-stone-600 rounded-lg bg-white mb-8"
      src="http://jybk.jybk/chatbot/9XwUTPzlUCGf1KuL"
      style="width: 100%; min-height: 700px"
      frameborder="0"
      allow="microphone">
    </iframe>
    
  </div>
</template>

<script setup>
const value=ref('hh')
const route=useRoute();
const supabase = useSupabaseClient()
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
const { data: article, error } = await supabase
  .from('article')
  .select('*')
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>