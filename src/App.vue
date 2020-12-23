<template>
  <img alt="Vue logo" v-custom-svg="{ class: ['cc'] }" data-hover="#f00" data-src="/src/assets/dong_tai.svg" />
  <p v-custom-svg data-hover="#4395ff" data-src="/src/assets/dong_tai.svg"></p>
  <button v-debounce.click="[add, debounce2]" :data-fn="add">add</button>
</template>

<script>
import { ref } from 'vue'
import { debounce } from './utils/utils.js'

export default {
  name: 'App',

  setup () {
    const ife = ref(true)

    function add (e, ife) {
      console.log('ife')
      
    }

    const debounce2 = (fn) => {
  let timer = null
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), 3000)
  }
}

    return {
      ife,
      add,
      debounce2
    }
  }
}

</script>
