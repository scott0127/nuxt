<template>
  <button
    class="=hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden
  border border-black bg-white px-3 text-sky-900 shadow-2xl transition-all before:absolute
  before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full
  before:w-0 before:bg-sky-900 before:transition-all before:duration-500 hover:text-white
  hover:before:left-0 hover:before:w-full rounded-full"
    @click="direction === 'prev' ? swiper.slidePrev() : swiper.slideNext()"
  >
    <span class="relative font-mario">{{ props.direction }}</span>
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
