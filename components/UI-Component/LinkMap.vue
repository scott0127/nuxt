<script setup>
const links = [{
  label: 'Profile',
  avatar: {
    src: ''
  },
  badge: 100
}, {
  label: 'Count',
  icon: 'i-heroicons-home',
  to: '/count/'
}, {
  label: '酥皮濃湯的資料庫專題',
  icon: 'i-heroicons-chart-bar',
  to: '/database'
}, {
  label: 'Command Palette',
  icon: 'i-heroicons-command-line',
  to: '/navigation/command-palette'
}]
</script>

<template>
  <div style="background-color: #c0d1cb;" class="rounded-xl h-full">
    <UVerticalNavigation :links="links" :ui="{base:'bg-color-stone-300',inactive:''}" />
  </div>
</template>
