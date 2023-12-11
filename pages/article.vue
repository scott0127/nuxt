<template>
  <div class="bg-white py-24 w-11/12 mt-40">
    <div class="">
      <h1 class="text-6xl font-semibold text-yellow-400">
        大家好！我是 pakkkk
      </h1>
      <button
        ref="openA"
        class="border-4 border-amber-700 border-dashed text-amber-700 hover:text-black hover:border-black font-Playpen font-bold py-2 rounded inline-flex items-center mb-4 justify-center"
        style="width: 210px; height: 55px;"
        @click="showTextarea"
      >
        - Create Article -
      </button>
      <UForm :schema="schema" :state="state" class="space-y-4 border-2 border-black w-1/2" @submit="onSubmit">
        <UFormGroup label="文章標題">
          <UTextarea
            v-if="show"
            v-model="title"
            :rows="1"
            variant="outline"
            class="w-[300px] mb-4"
            color="red"
            placeholder="這裡輸入文章標題喔"
            autoresize
          />
        </UFormGroup>
        <UFormGroup label="建立文章內容">
          <UTextarea
            v-if="show"
            v-model="article"
            variant="outline"
            class="w-[500px]"
            color="indigo"
            placeholder="這裡輸入文章內容喔"
            autoresize
          />
        </UFormGroup>
        <UFormGroup label="文章分類清單" />
      </UForm>
      <CatrgoryList />
      <div>
        <pre>{{ docs[0] }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getDocs, collection } from 'firebase/firestore'
import { ref } from 'vue'

const db = useFirestore()
const artref = collection(db, 'Article')
const snapshot = await getDocs(artref)
const docs = Array.from(snapshot.docs).map((doc) => {
  return {
    ...doc.data(),
    id: doc.id
  }
})
const show = ref(false)
const openA = ref(null)
const showTextarea = () => {
  show.value = !show.value
  openA.value.innerText = show.value ? 'Close' : 'Create Article' // 使用 openA.value 來訪問按鈕元素
}
const title = ref('')
const article = ref('')
</script>
