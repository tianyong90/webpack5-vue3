<template>
  <div class="picker">
    <PickerColumn :items="options" />
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
    let options = ref([])

    options = new Array(100000)
      .fill(null)
      .map((item, index) => 'Item ' + (index + 1)) as any

    const rootHeight = 300
    const rowHeight = 40
    const scrollTop = 0
    const nodePadding = 20

    return {
      options,
      rootHeight,
      rowHeight,
    }
  },
})
</script>

<style scoped lang="scss">
.picker {
  display: flex;
}
</style>
