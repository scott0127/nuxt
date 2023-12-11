<template>
  <div>
    <div class="mt-4 flex flex-col space-y-4 w-1/2">
      <div class="flex flex-col space-y-2 border-2 border-blue-700">
        <div>文章分類</div>
        <div class="flex space-x-2">
          <TagCompo
            :id="1"
            :bgcolor="'bg-blue-500 text-white'"
            :decolor="'text-white hover:bg-blue-200 hover:text-blue-900'"
            :name="'Facebook'"
            @delete-tag="deleteTag"
            @do-nothing="donothing"
            @dblclick.stop="add"
            @dragstart="dragStart"
          />
          <TagCompo
            :id="2"
            :bgcolor="'bg-green-400 text-black'"
            :decolor="'hover:bg-green-700 hover:text-green-300 text-white'"
            :name="'Vue'"
            @delete-tag="deleteTag"
            @do-nothing="donothing"
            @dblclick.stop="add"
            @dragstart="dragStart"
          />
          <TagCompo
            :id="3"
            :bgcolor="'bg-red-600 text-yellow-300 font-black'"
            :decolor="'hover:bg-yellow-300 hover:text-black-500 text-black'"
            :name="'Macdonald'"
            @delete-tag="deleteTag"
            @do-nothing="donothing"
            @dblclick.stop="add"
            @dragstart="dragStart"
          />
          <TagCompo
            :id="4"
            :bgcolor="'bg-green-500 text-white'"
            :decolor="'hover:bg-green-200 hover:text-green-900'"
            :name="'Nuxt'"
            @delete-tag="deleteTag"
            @do-nothing="donothing"
            @dblclick.stop="add"
            @dragstart="dragStart"
          />
          <TagCompo
            :id="5"
            :bgcolor="'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'"
            :decolor="'hover:bg-pink-500 hover:text-white'"
            :name="'instagram'"
            @delete-tag="deleteTag"
            @do-nothing="donothing"
            @dblclick.stop="add"
            @dragstart="dragStart"
          />
        </div>
        <div class="flex space-x-2">
          <TagCompo
            :id="6"
            :bgcolor="'bg-indigo-100'"
            :name="'Nuxt'"
            @delete-tag="deleteTag"
            @do-nothing="donothing"
            @dblclick.stop="add"
            @dragstart="dragStart"
          />
          <TagCompo
            :id="7"
            :bgcolor="'bg-purple-100'"
            :name="'Nuxt'"
            @delete-tag="deleteTag"
            @do-nothing="donothing"
            @dblclick.stop="add"
            @dragstart="dragStart"
          />
          <TagCompo
            :id="8"
            :bgcolor="'bg-pink-100'"
            :name="'Nuxt'"
            @delete-tag="deleteTag"
            @do-nothing="donothing"
            @dblclick.stop="add"
            @dragstart="dragStart"
          />
          <TagCompo
            :id="9"
            :bgcolor="'bg-blue-100'"
            :name="'Nuxt'"
            @delete-tag="deleteTag"
            @do-nothing="donothing"
            @dblclick.stop="add"
            @dragstart="dragStart"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col space-y-2 mt-4">
      <div class="dropzone bg-gray-200 p-4 rounded cursor-pointer" @dragover="dragOver" @drop="drop">
        放置區域
        <div class="selected-categories">
          <div v-for="category in selectedCategories.values()" :key="category.id" class="selected-category flex space-x-2">
            <div v-html="category.html" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedCategories: new Map()
    }
  },
  methods: {
    dragStart (event) {
      const spanElement = event.target // 獲取最接近的 <span> 元素
      event.dataTransfer.setData('text/plain', spanElement.outerHTML)
      event.dataTransfer.setData('text/id', spanElement.id)
    },
    dragOver (event) {
      event.preventDefault()
    },
    drop (event) {
      event.preventDefault()
      const elementHTML = event.dataTransfer.getData('text/plain')
      const id = event.dataTransfer.getData('text/id')
      const category = { id, html: elementHTML }
      this.selectedCategories.set(id, category)
      console.log(this.selectedCategories)// 可以看現在加了哪些 到時候要做刪除
    },
    deleteTag (id) {
      console.log(id)
      this.selectedCategories.delete(id)
    },
    add (event) {
      // console.log('Double click event triggered')
      const spanElement = event.target
      const id = spanElement.id
      console.log('id:', id)
      const category = { id, html: spanElement.outerHTML }
      this.selectedCategories.set(id, category)
    },
    donothing () {

    }
  }
}
</script>

  <style scoped>
  /* CSS 样式 */
  .dropzone {
    width: 200px;
    height: 200px;
  }
  </style>
