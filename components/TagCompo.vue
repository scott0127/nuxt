<template>
  <span
    :id="prop.id"
    draggable="true"
    class=" inline-flex items-center px-2 py-1 me-2 text-sm font-medium  rounded "
    :class="bgcolor"
  >
    {{ prop.name }}
    <button
      type="button"
      class="inline-flex items-center p-1 ms-2 text-sm  bg-transparent rounded-sm hover:animate-spin"
      :class="decolor"
      data-dismiss-target="#badge-dismiss-default"
      aria-label="Remove"
      @click="$emit('deleteTag', prop.id.toString())"
      @dblclick.stop="$emit('doNothing')"
    >
      <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
      </svg>
      <span class="sr-only">Remove badge</span>
    </button>
  </span>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emit = defineEmits(['deleteTag', 'doNothing'])
const prop = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  id: Number,
  // eslint-disable-next-line vue/require-default-prop
  bgcolor: String,
  // eslint-disable-next-line vue/require-default-prop
  decolor: String,
  // eslint-disable-next-line vue/require-default-prop
  name: String
})
</script>
