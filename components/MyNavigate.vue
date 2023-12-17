<template>
  <div
    ref="navigationBoss"
    class="border-b-4 border-gray-300 bg-gray-200 overflow-hidden border-solid duration-200 relative"
    :class="{ 'md:py-10': !isScrolled, 'bg-white': isScrolled }"
  >
    <div class="containerForCat move hidden md:block">
      <div class="cat walking" />
    </div>
    <div class="flex justify-center items-center px-4 py-8 md:px-6 md:py-16 mb-0">
      <div ref="mic" class="flex absolute sm:scale-75 sm:-left-8 lg:scale-100 lg:left-40 xl:left-72 right-10">
        <NuxtLink to="/" class="NuxtLink">
          <p
            ref="name"
            class="font-Willfteka tracking-normal md:text-3xl font-extrabold text-2xl leading-relaxed md:hover:animate-bounce "
            :class="{ 'xl:text-5xl': !isScrolled }"
            style="scale: 1.1 1;"
          >
            <span style="color: #B0A695;">S</span>cott Lin's Blog
          </p>
        </NuxtLink>
      </div>
      <div class="hidden md:block absolute sm:scale-50 sm:-right-36 lg:scale-75 lg:right-8 xl:right-24 xl:scale-100 border-none border-black ">
        <ul class="flex space-x-20 font-mono text-3xl">
          <li><a href="article" class="">Article</a></li>
          <li><a href="#" class="">Tutorial</a></li>
          <li><a href="about" class="">About</a></li>
          <li><a href="#" class="">Categories</a></li>
        </ul>
      </div>
      <div class="md:hidden mr-80">
        <button class="p-2 flex items-center self-start focus:outline-none" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <svg v-if="isMobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <Icon name="line-md:arrow-align-top" class="text-2xl w-6 h-6" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <Icon name="line-md:align-right" class="text-2xl w-6 h-6" />
          </svg>
        </button>
      </div>
    </div>
    <div v-show="isMobileMenuOpen" class="md:hidden static right-0 top-20 bg-white shadow-lg w-full animate-fade-right">
      <ul class="py-2 animate-fade-down font-Playpen font-bold">
        <li><a href="article" class="block px-8 py-2 text-sm text-gray-800 hover:bg-gray-200">Article</a></li>
        <li><a href="#" class="block px-8 py-2 text-sm text-gray-800 hover:bg-gray-200">Tutorial</a></li>
        <li><a href="about" class="block px-8 py-2 text-sm text-gray-800 hover:bg-gray-200">About</a></li>
        <li><a href="#" class="block px-8 py-2 text-sm text-gray-800 hover:bg-gray-200">Categories</a></li>
      </ul>
    </div>
    <DogComponent ref="doggy" class="hidden md:block move-dog dog " />
    <div v-if="samoOrigin" id="somoboss">
      <img ref="dogorigin" src="~/assets/images/dogrun.gif" class="scale-90 md:scale-100 move-samo absolute -bottom-6 md:bottom-0" style="scale: -1 1;">
      <img ref="dogshake" src="~/assets/images/dog.gif" class="scale-90 md:scale-100 move-samo-dog absolute -bottom-6 md:bottom-0" style="scale: -1 1;">
    </div>
    <div v-else id="somoboss2">
      <img ref="dogorigin" src="~/assets/images/dogrun.gif" class="scale-90 md:scale-100 move-samo-run1 absolute -bottom-6 md:bottom-0" style="scale: -1 1;">
      <img ref="dogshake" src="~/assets/images/dogshake.gif" class="scale-90 md:scale-100 move-samo-run2 absolute -bottom-6 md:bottom-0" style="scale: -1 1;">
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
export default {
  data () {
    return {
      isMobileMenuOpen: false,
      isScrolled: false,
      SpawnDog: false,
      samoOrigin: true,
      dogrun: true
    }
  },
  mounted () {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100)
    window.addEventListener('scroll', this.handleDebouncedScroll)
    setInterval(() => {
      const random = Math.random() // 生成 0 到 1 之間的隨機數
      if (random < 0.5) {
        this.samoOrigin = !this.samoOrigin
      }
    }, 20000) // 每 5 秒切換一次
  },
  methods: {
    handleScroll (_event) {
      this.isScrolled = window.scrollY !== 0
    },
    spawnDog () {
      this.SpawnDog = !this.SpawnDog
      console.log(this.SpawnDog)
    },
    somo () {
    }
  }
}
</script>

<style>
ul li a:hover {
  text-decoration: none;
  color: #7f1d1d;
  border: 2px solid #a3a3a3;
  padding: 10px 25px;
  border-radius: 30px;
  transition: 0.1s;
}

.containerForCat {
  scale: 0.3;
  position: absolute;
  bottom: -6%;
}

.cat {
  width: 400px;
  height: 200px;
  position: absolute;
  bottom:80%;
}
.walking {
  animation: catwalk 1s steps(12) infinite;
  background: url('~/assets/images/cat_tiles.png') 0 0 no-repeat;
}

.move {
  animation: move_ani 8s infinite;
}

.move-dog {
  animation: move_ani_dog 20s infinite;
}
.move-samo {
  animation: move_ani_samo 20s infinite;

}
.move-samo-dog {
  animation: move_ani_sh 20s infinite;

}
.move-samo-run1 {
  animation: move_ani_run1 20s infinite;

}
.move-samo-run2 {
  animation: move_ani_run2 20s infinite;

}

@keyframes catwalk {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -2391px;
  }
}

@keyframes move_ani {
  from {
    margin-left: 105%;
  }
  to {
    margin-left: -15%;
  }
}

@keyframes move_ani_dog {
  from {
    margin-left: 50%;
  }
  to {
    margin-left: -55%;
  }
}
@keyframes move_ani_samo {
  0% {
    margin-left: 95%;
    animation-timing-function: linear;
  }
  20% {
    margin-left: 75%;
    animation-timing-function: linear;
  }
  35%{
    opacity: 1;
  }
  40% {
    margin-left: 55%;
    animation-timing-function: linear;
    opacity: 0;
  }
  45%{
    opacity: 1;
  }
  60% {
    margin-left: 35%;
    animation-timing-function: linear;
    opacity: 1;
  }
  80% {
    margin-left: 15%;
    animation-timing-function: linear;
  }
  100% {
    margin-left: -5%;
    animation-timing-function: linear;
  }
}
@keyframes move_ani_sh {
  0% {
    margin-left: 95%;
    animation-timing-function: linear;
    opacity: 0;
  }
  20% {
    margin-left: 75%;
    animation-timing-function: linear;
    opacity: 0;
  }
  35%{
    opacity: 0;
  }
  40% {
    margin-left: 55%;
    animation-timing-function: linear;
    opacity: 1;
  }
  43% {
    margin-left: 55%;
    animation-timing-function: linear;
    opacity: 0;
  }
  60% {
    margin-left: 35%;
    animation-timing-function: linear;
    opacity: 0;
  }
  80% {
    margin-left: 15%;
    animation-timing-function: linear;
    opacity: 0;
  }
  100% {
    margin-left: -5%;
    animation-timing-function: linear;
    opacity: 0;
  }
}
@keyframes move_ani_run1 {
  0% {
    margin-left: 95%;
    animation-timing-function: linear;
    opacity: 1;
  }
  20% {
    margin-left: 75%;
    animation-timing-function: linear;
    opacity: 1;
  }
  40% {
    margin-left: 55%;
    animation-timing-function: linear;
    opacity: 1;
  }
  41% {
    margin-left: 55%;
    animation-timing-function: linear;
    opacity: 0;
  }
  49% {
    margin-left: 55%;
    animation-timing-function: linear;
    opacity: 0;
  }
  50% {
    margin-left: 55%;
    animation-timing-function: linear;
    opacity: 1;
  }
  60% {
    margin-left: 35%;
    animation-timing-function: linear;
    opacity: 1;
  }
  80% {
    margin-left: 15%;
    animation-timing-function: linear;
    opacity: 1;
  }
  100% {
    margin-left: -5%;
    animation-timing-function: linear;
    opacity: 1;
  }
}
@keyframes move_ani_run2 {
  0% {
    margin-left: 95%;
    animation-timing-function: linear;
    opacity: 0;
  }
  20% {
    margin-left: 75%;
    animation-timing-function: linear;
    opacity: 0;
  }
  40% {
    margin-left: 55%;
    animation-timing-function: linear;
    opacity: 0;
  }
  41% {
    margin-left: 55%;
    animation-timing-function: linear;
    opacity: 1;
  }
  49% {
    margin-left: 55%;
    animation-timing-function: linear;
    opacity: 1;
  }
  50% {
    margin-left: 55%;
    animation-timing-function: linear;
    opacity: 0;
  }
  60% {
    margin-left: 35%;
    animation-timing-function: linear;
    opacity: 0;
  }
  80% {
    margin-left: 15%;
    animation-timing-function: linear;
    opacity: 0;
  }
  100% {
    margin-left: -5%;
    animation-timing-function: linear;
    opacity: 0;
  }
}
</style>
