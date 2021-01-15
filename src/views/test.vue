<template>
  <div>
    tesasfas
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup (props, context) {
    const msg = ref('hello')

    // console.log(props)
    // console.log(context)
    // console.log(context.upCallback)

    return {
      msg,
    }
  },

  data () {
    return {
    }
  },

  methods: {},
})
</script>

<style scoped lang="scss">

</style>
