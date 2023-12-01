<template>
  <div
    class="border-b-4 border-gray-300 bg-gray-100
  overflow-hidden border-solid"
    style="background-color: white;"
  >
    <div class="containerForCat move absolute hidden md:block">
      <div class="cat walking absolute" />
    </div>
    <div class="flex justify-between items-center px-4 py-8 md:px-6 md:py-8 mb-0">
      <div class="flex items-center absolute left-40">
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
      class="md:hidden absolute right-0 top-20 bg-white rounded shadow-lg z-200 w-full"
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
export default {
  data () {
    return {
      isMobileMenuOpen: false
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
  width: 100%;
  height: 100%;
}
.cat{
  width: 400px;
  height:200px;
  margin: 50px auto 0;
  top: -105px;
  scale: 0.3;
}
.walking{
  animation: catwalk 0.5s steps(12) infinite;
  background: url('~/assets/images/cat_tiles.png') 0 0 no-repeat;
}
.move{
  animation: move_ani 20s  infinite;
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
</style>
