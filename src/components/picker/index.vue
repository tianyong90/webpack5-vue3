<template>
  <div class="picker">
    <PickerColumn :items="options" />
    <PickerColumn :items="options" />
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

    options = new Array(10000)
      .fill(null)
      .map((item, index) => (index % 60).toString().padStart(2, '0')) as any

    return {
      options,
    }
  },
})
</script>

<style scoped lang="scss">
.picker {
  display: flex;
  flex-direction: row;
  fleX: 1;
}
</style>
