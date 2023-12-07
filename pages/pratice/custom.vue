<script step>
definePageMeta({
  layout: 'custom'
})
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    showImage () {
      if (this.show === true) {
        this.show = false
      } else {
        this.show = true
      }
    }
  }
}
</script>

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-yellow-400">
        大家好！我是炳翰
      </h1>
      <p class="my-8 text-3xl text-gray-600">
        這裡是我的第一張
      </p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="showImage">
        點下去
      </button>
      <img v-if="show" src="~/assets/images/wintermelon.png" alt="Image">
    </div>
  </div>
</template>
