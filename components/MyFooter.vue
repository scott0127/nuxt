<template>
  <div class="h-1/3 bg-[url('~/assets/images/starnight.jpg')]  bg-fixed bg-cover text-white pb-10">
    <div class="flex flex-row container px-4 sm:px-6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-1 sm:gap-36">
      <div class="footer-left col-span-1 sm:col-span-2 mt-16">
        <h4 class="text-lg font-bold mb-4 inline-block">
          <p class="border-b-2 border-cyan-400 hover:border-purple-400">
            我的社交帳號(My Social)
          </p>
        </h4>
        <div class="flex flex-row gap-2 md:gap-4">
          <div class="flex flex-row gap-2">
            <a href="#"><img src="~/assets/images/facebook.png" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"></a>
            <a href="#"><img src="~/assets/images/Googlell.png" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"></a>
            <a href="#"><img src="~/assets/images/twitter.png" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"></a>
            <a href="https://www.instagram.com/lin_michi50/" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"><img src="~/assets/images/instagram.png"></a>
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

      <div class="footer-mid col-span-1 mt-16 justify-center flex items-center">
        <h4 class="text-lg font-bold mb-4 inline-block text-center sm:mt-16">
          <p class="">
            &copy; Copyright 1234
          </p>
          <p class="text-xs font-serif font-extralight text-slate-300">
            ALL rights reserved. Powered by the <span class="text-white text-sm">ScottLin</span>
          </p>
        </h4>
      </div>

      <div class="footer-right hidden sm:block border-l-8 border-double pl-4 sm:pl-14 ml-8 mt-8 h-4/5">
        <div class="flex flex-col gap-2 whitespace-nowrap mt-6">
          <UIComponentMailInput />
        </div>
      </div>
    </div>
  </div>
</template>
