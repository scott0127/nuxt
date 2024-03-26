<template>
  <div class="bg-white py-24 w-11/12 mt-40">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-yellow-400">
        大家好！我是 pakkkk
      </h1>
      <UInput class="w-56 ml-8 my-4" v-model="value" color="cyan" placeholder="部落格測試"/>
      <main class="border-2 border-green-500 w-4/5 flex  flex-col items-center">
        <ContentDoc  :path="value">
        </ContentDoc>
      </main>
      <p>用戶有:{{user["email"]}}</p>

      <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
        <a-form-item field="title" label="title">
          <a-input
            v-model="form.title"
            placeholder="please enter your 標題..."
          />
        </a-form-item>
        <a-form-item field="date" label="date">
          <a-date-picker style="width: 200px;" v-model="form.date" />
        </a-form-item>
        <a-form-item field="content">
          <a-input
            v-model="form.content"
            placeholder="please enter your 內容..."
          />
        </a-form-item>
        <a-form-item field="img">
          <a-input
            v-model="form.img_route"
            placeholder="please enter your img位置..."
          />
        </a-form-item>
        <a-form-item field="sig">
          <a-input
            v-model="form.sig_route"
            placeholder="please enter your 跳轉..."
          />
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit">Submit</a-button>
        </a-form-item>
        {{form}}
      </a-form>
      <p>dsakudhgasuidukashgdukasgkdshakjdhjadh</p> 
      <button @click="select">按下去</button>
      <p class="w-52 h-52 border-2 border-yellow-500">{{article[0]}}</p>
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

//down supabase
const supabase = useSupabaseClient()
const { data: { user } } = await supabase.auth.getUser()

const value=ref('/blog')

const form = reactive({
      name: '',
      date: '',
      content: '',
      img_route: '',
      sig_route: '',
});
async function handleSubmit() {
  const { data, error } = await supabase
    .from('article')
    .insert([
      { date: form.date, 
        title: form.title, 
        content: form.content,
        image_route: form.img_route,
        singlePage_route:form.sig_route},
    ])
    .select()
  if(error){
    alert(error)
  }
}
const { data: article, error } = await supabase
  .from('article')
  .select('*')
  
</script>
