<template>
  <div class="mt-80">
    <input type="file" @change="onFileChange">
    <button @click="upload">
      upload
    </button>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>

const image = ref(null)
const message = ref(null)
function onFileChange (event) {
  console.log(event)
  image.value = event.target.files[0]
  console.log(image.value)
  // this.image = event.target.files[0]
}
const upload = async () => {
  const fd = new FormData()
  fd.append('username', 'Justin')
  fd.append('password', '123456')
  fd.append('image', image.value)
  for (const pair of fd.entries()) {
    console.log(pair[0] + ', ' + pair[1])
  }
  const response = await $fetch('http://localhost:5000/api/upload', {
    method: 'POST',
    body: fd
  })
  message.value = response.message
}
</script>
