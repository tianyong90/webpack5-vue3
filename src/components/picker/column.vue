<template>
  <div class="picker-column">
    <div
      v-for="option in options"
      :key="option"
      class="picker-option"
    >
      {{ option }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },

  setup () {
    // const msg = ref('hello')
    //
    // return {
    //   msg,
    // }
  },

  mounted () {
  },
})
</script>

<style scoped lang="scss">
.picker-column {
  display: flex;
  flex-direction: column;
  height: 150px;
  overflow-y: scroll;
  width: 200px;

  .picker-option {
    display: inline-flex;
    height: 40px;
    background-color: #f00;
    justify-content: center;
    align-items: center;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
}
</style>
