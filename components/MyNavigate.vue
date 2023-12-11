<template>
  <div
    ref="navigationBoss"
    class="border-b-4 border-gray-300 bg-gray-200 overflow-hidden border-solid duration-200 relative"
    :class="{ 'md:py-10': !isScrolled, 'bg-white': isScrolled }"
  >
    <div class="containerForCat move hidden md:block">
      <div class="cat walking" />
    </div>
    <DogComponent ref="doggy" class="hidden md:block move-dog dog" />
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
    <div v-show="isMobileMenuOpen" class="md:hidden fixed right-0 top-20 bg-white shadow-lg w-full">
      <ul class="py-2">
        <li><a href="article" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Article</a></li>
        <li><a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Tutorial</a></li>
        <li><a href="about" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">About</a></li>
        <li><a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Categories</a></li>
      </ul>
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
      SpawnDog: false
    }
  },
  mounted () {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100)
    window.addEventListener('scroll', this.handleDebouncedScroll)
  },
  methods: {
    handleScroll (_event) {
      this.isScrolled = window.scrollY !== 0
    },
    spawnDog () {
      this.SpawnDog = !this.SpawnDog
      console.log(this.SpawnDog)
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
</style>
