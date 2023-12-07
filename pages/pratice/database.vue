<template>
  <div class="mt-80">
    <input id="name" v-model="formData.name" type="text" placeholder="请输入名字">
    <button @click="submit">
      創建database
    </button>
    <p>{{ message }}</p>
    <button @click="refresh">
      刷新database清單
    </button>
    <ul class="border-2 border-black">
      <li v-for="folder in folders" :key="folder">
        {{ folder }}
      </li>
    </ul>

    <label>輸入table名稱：</label>
    <input v-model="formData.tableName" type="text">
    <select v-model="formData.selectedFolder" class="border-purple-500 border-2">
      <option v-for="(folder, index) in folders" :key="index" :value="folder">
        {{ folder }}
      </option>
    </select>
    <button class="border-green-500 border-2 font-serif" @click="createTable">
      建立表格
    </button>
    <p>建立csv msg: {{ message }}</p>
  </div>
</template>

<script setup>
import console from 'console'
import { ref } from 'vue'

const formData = ref({
  name: '',
  tableName: '',
  selectedFolder: ''
})
const folders = ref([])
const message = ref('')

const submit = async () => {
  const response = await $fetch('http://localhost:5000/api/create-folder', {
    method: 'POST',
    body: { name: formData.value.name }
  })
  message.value = response.message
  console.log(response)
}

const refresh = async () => {
  const response = await $fetch('http://localhost:5000/api/folders', {
    method: 'GET'
  })
  folders.value = response.folders
  message.value = response.message
}

const createTable = async () => {
  const response = await $fetch('http://localhost:5000/api/create-table', {
    method: 'POST',
    body: {
      table_name: formData.value.tableName,
      selected_folder: formData.value.selectedFolder
    }
  })
  message.value = response.message
}
</script>
