<script setup>
const isOpen = ref(false)
</script>

<template>
  <div>
    <UButton color="black" variant="ghost" @click="isOpen = true">
      <Icon name="logos:spotify-icon" width="50" height="50" class="hover:animate-spin scale-125 duration-300" />
    </UButton>
    <USlideover v-model="isOpen">
      <UButton color="red" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="border-2 border-green-600" @click="isOpen = false" />
      <div id="shasen" class="p-4 flex-1 border-2 border-black bg-stone-300 rounded-lg">
        <iframe
          style="border-radius:12px"
          src="https://open.spotify.com/embed/playlist/1X3NqUgzrRBq2vdvJfygMx?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </USlideover>
  </div>
</template>
<style>
#shasen {
  width: 100%;
  height: 100%;
  background: linear-gradient(
  -60deg,
  #fff,
  #fff 45%,
  #55cc33 45%,
  #55cc33 50%,
  #fff 50%,
  #fff 95%,
  #55cc33 95%,
  #55cc33
  );
  background-size:  17px 30px;
}
</style>
