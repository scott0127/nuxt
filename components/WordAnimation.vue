<template>
  <div class="flex h-auto w-screen items-center justify-center bg-white font-bold text-black border-2 border-gray-500 mt-12">
    <div class=" text-center space-y-12">
      <div class="text-center text-5xl font-bold mt-4">
        Services offered
        <div class="mt-8 inline-grid grid-cols-1 grid-rows-1  overflow-hidden border-2 border-white ">
          <span class="animate-word col-span-full row-span-full">林米奇's 網站</span>
          <span class="animate-word-delay-1 col-span-full row-span-full">Website</span>
          <span class="animate-word-delay-2 col-span-full row-span-full">Build By</span>
          <span class="animate-word-delay-3 col-span-full row-span-full">NuxtJS</span>
          <span class="animate-word-delay-4 col-span-full row-span-full">Vue</span>
          <span class="animate-word-delay-5 col-span-full row-span-full">Typescript</span>
          <span class="animate-word-delay-6 col-span-full row-span-full">Tailwinds</span>
        </div>
      </div>
      <p class=" text-black font-Chinese">
        我要累鼠了但是有酷酷的跑馬燈 <a class="text-purple-500" href="scott5497ify@gmail.com">這邊點下去mail</a>
      </p>
    </div>
  </div>
</template>
  <style>

  @keyframes word {
    0% {
      transform: translateY(100%);
    }
    12% {
      transform: translateY(-20%);
      animation-timing-function: ease-out;
    }

    14% {
      transform: translateY(0);
    }

    20%,
    100% {
      transform: translateY(-120%);
    }
  }

  .animate-word {
    animation: word 9.8s infinite;
  }
  .animate-word-delay-1 {
    animation: word 9.8s infinite;
    animation-delay: -1.4s;
  }
  .animate-word-delay-2 {
    animation: word 9.8s infinite;
    animation-delay: -2.8s;
  }
  .animate-word-delay-3 {
    animation: word 9.8s infinite;
    animation-delay: -4.2s;
  }
  .animate-word-delay-4 {
    animation: word 9.8s infinite;
    animation-delay: -5.6s;
  }
  .animate-word-delay-5 {
    animation: word 9.8s infinite;
    animation-delay: -7s;
  }
  .animate-word-delay-6 {
    animation: word 9.8s infinite;
    animation-delay: -8.4s;
  }

  </style>
