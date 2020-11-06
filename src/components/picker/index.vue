<template>
  <div class="picker">
    <PickerColumn :options="options" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PickerColumn from './column.vue'

export default defineComponent({
  components: {
    PickerColumn,
  },

  setup () {
    const options = ref([
      1,
      2,
      3,
      4,
      5,
      6,
    ])

    return {
      options,
    }
  },

  mounted () {
  },
})
</script>

<style scoped lang="scss">
.picker {
  display: flex;
}
</style>
