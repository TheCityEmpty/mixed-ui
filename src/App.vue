<template>
  <img alt="Vue logo" v-custom-svg="{ class: ['cc'] }" data-hover="#f00" data-src="/src/assets/dong_tai.svg" />
  <p v-custom-svg data-hover="#4395ff" data-src="/src/assets/dong_tai.svg"></p>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',

  setup () {
    const ife = ref(true)


    return {
      ife
    }
  }
}
</script>
