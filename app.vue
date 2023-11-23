<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const useRound = ref(false)
const BaseButton = resolveComponent('BaseApplyButton')
const RoundButton = resolveComponent('RoundApplyButton')
</script>
