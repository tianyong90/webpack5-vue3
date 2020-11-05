<template>
  <div>
    {{ msg }}

    <h1 class="text-xl">
      hello
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const msg = ref('hello')

    return {
      msg,
    }
  },
})
</script>

<style scoped lang="scss">
h1 {
  color: red;
}
</style>
