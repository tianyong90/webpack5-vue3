<template>
  <div>
    栽植
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MescrollVue from 'mescroll.js/mescroll.vue'

export default defineComponent({
  components: {
    MescrollVue,
  },

  setup () {
    const msg = ref('hello')

    return {
      msg,
    }
  },
})
</script>

<style scoped lang="scss">

</style>
