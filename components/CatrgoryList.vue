<template>
  <div>
    <div class="mt-4 flex flex-col space-y-4 w-1/2">
      <div class="flex flex-col space-y-2 border-2 border-blue-700">
        <div>文章分類</div>
        <div class="flex space-x-2">
          <span id="1" draggable="true" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300" @dblclick.stop="add" @dragstart="dragStart">
            Default
            <button
              type="button"
              class="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
              data-dismiss-target="#badge-dismiss-default"
              aria-label="Remove"
              @click="deleteTag('1')"
              @dblclick.stop="donothing"
            >
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span id="2" draggable="true" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300" @dblclick.stop="add" @dragstart="dragStart">
            Dark
            <button
              type="button"
              class="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
              data-dismiss-target="#badge-dismiss-dark"
              aria-label="Remove"
              @click="deleteTag('2')"
              @dblclick.stop="donothing"
            >
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span id="3" draggable="true" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-900 dark:text-red-300" @dblclick.stop="add" @dragstart="dragStart">
            Red
            <button
              type="button"
              class="inline-flex items-center p-1  ms-2 text-sm text-red-400 bg-transparent rounded-sm hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300"
              data-dismiss-target="#badge-dismiss-red"
              aria-label="Remove"
              @click="deleteTag('3')"
              @dblclick.stop="donothing"
            >
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span id="4" draggable="true" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-300" @dblclick.stop="add" @dragstart="dragStart">
            Green
            <button
              type="button"
              class="inline-flex items-center p-1 ms-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300"
              data-dismiss-target="#badge-dismiss-green"
              aria-label="Remove"
              @click="deleteTag('4')"
              @dblclick.stop="donothing"
            >
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span id="5" draggable="true" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300" @dblclick.stop="add" @dragstart="dragStart">
            Yellow
            <button
              type="button"
              class="inline-flex items-center p-1 ms-2 text-sm text-yellow-400 bg-transparent rounded-sm hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300"
              data-dismiss-target="#badge-dismiss-yellow"
              aria-label="Remove"
              @click="deleteTag('5')"
              @dblclick.stop="donothing"
            >
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span id="6" draggable="true" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded dark:bg-indigo-900 dark:text-indigo-300" @dblclick.stop="add" @dragstart="dragStart">
            Indigo
            <button
              type="button"
              class="inline-flex items-center p-1 ms-2 text-sm text-indigo-400 bg-transparent rounded-sm hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300"
              data-dismiss-target="#badge-dismiss-indigo"
              aria-label="Remove"
              @click="deleteTag('6')"
              @dblclick.stop="donothing"
            >
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span id="7" draggable="true" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-900 dark:text-purple-300" @dblclick.stop="add" @dragstart="dragStart">
            Purple
            <button
              type="button"
              class="inline-flex items-center p-1 ms-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300"
              data-dismiss-target="#badge-dismiss-purple"
              aria-label="Remove"
              @click="deleteTag('7')"
              @dblclick.stop="donothing"
            >
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span
            id="8"
            draggable="true"
            class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-pink-800 bg-pink-100 rounded dark:bg-pink-900 dark:text-pink-300"
            @dblclick.stop="add"
            @dragstart="dragStart"
          >
            Pink
            <button
              type="button"
              class="inline-flex items-center p-1 ms-2 text-sm text-pink-400 bg-transparent rounded-sm hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300"
              data-dismiss-target="#badge-dismiss-pink"
              aria-label="Remove"
              @click="deleteTag('8')"
              @dblclick.stop="donothing"
            >
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
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
      console.log('Double click event triggered')
      console.log('Target tag:', event.target.tagName)
      const spanElement = event.target
      const id = spanElement.id
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
