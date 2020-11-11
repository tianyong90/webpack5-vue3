<template>
  <div>
    <Picker />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Picker from '@/components/rain-effect/index.vue'

export default defineComponent({
  components: {
    Picker,
  },

  setup (props, context) {
    const msg = ref('hello')

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
