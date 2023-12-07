<template>
  <div>
    <div class="p-5 flex flex-col space-y-4">
      <div class="flex flex-col space-y-2">
        <div>Basic badges</div>
        <div class="flex space-x-2">
          <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-gray-200 text-gray-800 rounded-full" draggable="true" @dragstart="dragStart">
            Badge
          </div>
          <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-red-200 text-red-800 rounded-full">
            Badge
          </div>
          <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-orange-200 text-orange-800 rounded-full">
            Badge
          </div>
          <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-yellow-200 text-yellow-800 rounded-full">
            Badge
          </div>
          <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-green-200 text-green-800 rounded-full">
            Badge
          </div>
          <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-teal-200 text-teal-800 rounded-full">
            Badge
          </div>
          <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-blue-200 text-blue-800 rounded-full">
            Badge
          </div>
          <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-purple-200 text-purple-800 rounded-full">
            Badge
          </div>
          <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-indigo-200 text-indigo-800 rounded-full">
            Badge
          </div>
          <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="text-xs px-3 bg-pink-200 text-pink-800 rounded-full">
            Badge
          </div>
        </div>
      </div>

      <div class="flex flex-col space-y-2">
        <div>Large badges</div>
        <div class="flex space-x-2">
          <span id="badge-dismiss-default" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300">
            Default
            <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span id="badge-dismiss-dark" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300">
            Dark
            <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span id="badge-dismiss-red" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-900 dark:text-red-300">
            Red
            <button type="button" class="inline-flex items-center p-1  ms-2 text-sm text-red-400 bg-transparent rounded-sm hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300" data-dismiss-target="#badge-dismiss-red" aria-label="Remove">
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span id="badge-dismiss-green" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-300">
            Green
            <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300" data-dismiss-target="#badge-dismiss-green" aria-label="Remove">
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span id="badge-dismiss-yellow" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300">
            Yellow
            <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-yellow-400 bg-transparent rounded-sm hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300" data-dismiss-target="#badge-dismiss-yellow" aria-label="Remove">
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span id="badge-dismiss-indigo" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded dark:bg-indigo-900 dark:text-indigo-300">
            Indigo
            <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-indigo-400 bg-transparent rounded-sm hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300" data-dismiss-target="#badge-dismiss-indigo" aria-label="Remove">
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span id="badge-dismiss-purple" draggable="true" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-900 dark:text-purple-300" @dragstart="dragStart">
            Purple
            <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300" data-dismiss-target="#badge-dismiss-purple" aria-label="Remove">
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
          <span id="badge-dismiss-pink" draggable="true" class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-pink-800 bg-pink-100 rounded dark:bg-pink-900 dark:text-pink-300" @dragstart="dragStart">
            Pink
            <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-pink-400 bg-transparent rounded-sm hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300" data-dismiss-target="#badge-dismiss-pink" aria-label="Remove">
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Remove badge</span>
            </button>
          </span>
        </div>
      </div>

      <div class="flex flex-col space-y-2">
        <div>Badge with dot</div>
        <div class="flex space-x-2">
          <div style="padding-top: 0.2em; padding-bottom: 0.2rem" class="flex items-center space-x-1 text-xs px-2 bg-gray-200 text-gray-800 rounded-full">
            <div style="width: 0.4rem; height: 0.4rem" class="bg-gray-500 rounded-full" />
            <div>Badge</div>
          </div>
          <div style="padding-top: 0.2em; padding-bottom: 0.2rem" class="flex items-center space-x-1 text-sm px-2 bg-gray-200 text-gray-800 rounded-full">
            <div style="width: 0.4rem; height: 0.4rem" class="bg-gray-500 rounded-full" />
            <div>Badge</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col space-y-2 mt-4">
      <div class="dropzone bg-gray-200 p-4 rounded cursor-pointer" @dragover="dragOver" @drop="drop">
        放置區域
        <div class="selected-categories">
          <div v-for="category in selectedCategories" :key="category" class="selected-category flex space-x-2">
            <div v-html="category" />
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
      selectedCategories: []
    }
  },
  methods: {
    dragStart (event) {
      const spanElement = event.target.closest('span') // 獲取最接近的 <span> 元素
      event.dataTransfer.setData('text/plain', spanElement.outerHTML)
    },
    dragOver (event) {
      event.preventDefault()
    },
    drop (event) {
      event.preventDefault()
      const elementHTML = event.dataTransfer.getData('text/plain')
      this.selectedCategories.push(elementHTML)
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
