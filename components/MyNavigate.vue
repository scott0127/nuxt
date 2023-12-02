<template>
  <div
    ref="navigationBoss"
    class="border-b-4 border-gray-300 bg-gray-100
  overflow-hidden border-solid duration-300 relative "
    style="background-color: white;"
  >
    <div class="containerForCat move hidden md:block">
      <div class="cat walking" />
    </div>
    <DogComponent ref="doggy" class="hidden md:block move-dog dog" />
    <div class="flex justify-between items-center px-4 py-8 md:px-6 md:py-8 mb-0">
      <div ref="mic" class="flex items-center absolute md:left-80 hover:animate-bounce ">
        <NuxtLink to="/" class="NuxtLink text-xl font-bold" style="color: #B0A695;">
          回到米奇網首頁
        </NuxtLink>
        <micky_icon />
      </div>
      <div class="hidden md:block md:right-80 absolute">
        <ul class="flex space-x-20 font-mono ">
          <li><a href="#" class="">文章</a></li>
          <li><a href="#" class="">分類</a></li>
          <li><a href="#" class="">關於我</a></li>
        </ul>
      </div>
      <div class="md:hidden">
        <button class="p-2 flex items-center focus:outline-none" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <svg v-if="isMobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <Icon name="line-md:arrow-align-top" class="text-2xl w-6 h-6" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <Icon name="line-md:align-right" class="text-2xl w-6 h-6" />
          </svg>
        </button>
      </div>
    </div>
    <div
      v-show="isMobileMenuOpen"
      class="md:hidden static right-0 top-20 bg-white shadow-lg w-full"
    >
      <ul class="py-2">
        <li><a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">文章</a></li>
        <li><a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">分類</a></li>
        <li><a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">關於我</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
export default {
  data () {
    return {
      isMobileMenuOpen: false
    }
  },
  mounted () {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100)
    window.addEventListener('scroll', this.handleDebouncedScroll)
  },
  onMounted () {
  },
  methods: {
    handleScroll (_event) {
      if (window.scrollY === 0) {
        this.$refs.navigationBoss.classList.add('md:py-10')
      } else {
        this.$refs.navigationBoss.classList.remove('md:py-10')
      }
      console.log(window.scrollY)
    }
  }
}
</script>

<style>
ul li a:hover{
    text-decoration: none;
    color: #7f1d1d;
    border: 2px solid #a3a3a3;
    padding: 10px 25px;
    border-radius: 30px;
    transition: 0.3s;
}
.NuxtLink:hover{
    text-decoration: none;
    color: #7f1d1d;
    padding: 10px 25px;
    border-radius: 30px;
    transition: 0.3s;
}
.containerForCat {
  scale: 0.3;
  position: absolute;
  bottom: -6%;
}
.cat{
  width: 400px;
  height:200px;
  position: absolute;
  bottom: 80%;
}
.walking{
  animation: catwalk 1s steps(12) infinite;
  background: url('~/assets/images/cat_tiles.png') 0 0 no-repeat;
}
.move{
  animation:   move_ani 8s  infinite;
}
.move-dog{
  animation:  move_ani_dog 20s  infinite;
}
@keyframes catwalk {
  from {
    background-position: 0 0;
  }
  to{
    background-position:0 -2391px;
  }
}
@keyframes move_ani{
  from {
    margin-left: 105%;
  }
  to{
    margin-left: -15%;
  }
}
@keyframes move_ani_dog{
  from {
    margin-left: 50%;
  }
  to{
    margin-left: -55%;
  }
}
</style>
