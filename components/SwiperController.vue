<template>
  <button
    class="=hover:before:bg-redborder-red-500 relative h-[50px] w-30 overflow-hidden
  border border-black bg-white px-3 text-green-300 shadow-2xl transition-all before:absolute
  before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full
  before:w-0 before:bg-red-300 before:transition-all before:duration-500 hover:text-white
  hover:before:left-0 hover:before:w-full rounded-lg"
    @click="direction === 'prev' ? swiper.slideNext() : swiper.slidePrev()"
  >
    <span class="relative font-mono font-medium">{{ props.direction }}</span>
  </button>
</template>

<script setup>

const props = defineProps({
  direction: {
    type: String,
    default: '',
    validator: (value) => {
      return ['prev', 'next'].includes(value)
    }
  }
})

const swiper = useSwiper()
</script>
