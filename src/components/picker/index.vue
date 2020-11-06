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

  props: {
    visibleItemCount: {
      type: Number,
      default: 7,
    },
    rowHeight: {
      type: Number,
      default: 40,
    },
  },

  setup (props, context) {
    let options = ref([])

    options = new Array(10000)
      .fill(null)
      .map((item, index) => (index % 60).toString().padStart(2, '0')) as any

    return {
      options,
    }
  },

  mounted () {
    // 上下两部分阴影遮罩的高度根据可视元素个数和行高进行计算
    const maskHeight = Math.floor(this.visibleItemCount / 2) * this.rowHeight
    this.$el.style.setProperty('--mask-height', `${maskHeight}px`)
  },
})
</script>

<style scoped lang="scss">
.picker {
  --mask-height: 120px;

  display: flex;
  flex-direction: row;
  fleX: 1;
  position: relative;
  user-select: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: var(--mask-height, 120px);
    z-index: -1;
  }

  &::before {
    border-bottom: 1px solid #cdcdcd;
    background-image: linear-gradient(to top, rgba(216 216 216 / 0.5), rgba(255 255 255 / 0.2));
  }

  &::after {
    bottom: 0;
    border-top: 1px solid #cdcdcd;
    background-image: linear-gradient(to bottom, rgba(216 216 216 / 0.5), rgba(255 255 255 / 0.2));
  }
}
</style>
