<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      msg: 'hello world',
    }
  },
})
</script>

<style scoped lang="scss">
</style>
