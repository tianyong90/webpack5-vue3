<template>
  <div id="app">
    <h1
      class="title"
    >
      {{ msg }}
    </h1>
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
.title {
  background-color: #f00;
  font-size: 3rem;
}
</style>
