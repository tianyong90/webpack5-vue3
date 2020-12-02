<template>
  <h1 id="background">
    asdfasdfsdf
  </h1>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
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

  mounted () {
    this.$nextTick(() => {
      // @ts-ignore eslint-disable-next-line
      const rainyDay = new RainyDay({
        image: 'background', // Target p element with ID, RainyDay.js will use backgorund image to simulate rain effects.
      })
    })
  },

  methods: {},
})
</script>

<style scoped lang="scss">
#background {
  display: block;
  width: 100%;
  height: 500px;
  background-color: #ccc;
  //background-image: url('~@/assets/city.jpg');
}
</style>
