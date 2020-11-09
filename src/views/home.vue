<template>
  <div>
    <router-link
      to="/test"
      class="my-5 text-lg"
    >
      test
    </router-link>

    <Picker />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Picker from '@/components/picker/index.vue'

export default defineComponent({
  components: {
    Picker,
  },

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
