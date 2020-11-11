<template>
  <h1>{{ index }}</h1>

  <div
    ref="root"
    class="picker-column"
    :style="rootStyle"
  >
    <div
      ref="viewport"
      class="viewport"
      :style="viewportStyle"
    >
      <div
        ref="spacer"
        class="spacer"
        :style="spacerStyle"
      >
        <div
          v-for="option in visibleItems"
          :key="option"
          class="picker-option"
          :style="itemStyle"
          @click="onClickItem(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  setup () {
    const rootHeight = ref(0)
    const rowHeight = ref(40)
    const scrollTop = ref(0)
    const nodePadding = ref(20)

    const index = ref(0)

    return {
      rootHeight,
      rowHeight,
      scrollTop,
      nodePadding,

      index,
    }
  },

  computed: {
    itemCount (): number {
      return this.items.length
    },

    viewportHeight (): number {
      return this.itemCount * this.rowHeight
    },

    startIndex (): number {
      let startNode = Math.floor(this.scrollTop / this.rowHeight) - this.nodePadding
      startNode = Math.max(0, startNode)
      return startNode
    },

    visibleNodeCount () {
      let count = Math.ceil(this.rootHeight / this.rowHeight) + 2 * this.nodePadding
      count = Math.min(this.itemCount - this.startIndex, count)
      return count
    },

    visibleItems () {
      return this.items.slice(
        this.startIndex,
        this.startIndex + this.visibleNodeCount,
      )
    },

    offsetY () {
      return this.startIndex * this.rowHeight
    },

    itemStyle () {
      return {
        height: this.rowHeight + 'px',
      }
    },

    spacerStyle () {
      return {
        transform: 'translateY(' + this.offsetY + 'px)',
      }
    },

    viewportStyle () {
      return {
        // overflow: 'hidden',
        height: this.viewportHeight + 'px',
        position: 'relative',
      }
    },

    rootStyle () {
      return {
        height: this.rootHeight + 'px',
        overflow: 'auto',
      }
    },
  },

  mounted () {
    // 根据可视行数计算高度
    this.rootHeight = this.$parent.visibleItemCount * this.rowHeight

    this.$nextTick(() => {
      this.$refs.root.addEventListener(
        'scroll',
        this.handleScroll,
        this.doesBrowserSupportPassiveScroll() ? { passive: true } : false,
      )
      // Calculate that initial row height dynamically
      const largestHeight = this.calculateInitialRowHeight()
      this.rowHeight =
        typeof largestHeight !== 'undefined' && largestHeight !== null
          ? largestHeight
          : 30
    })
  },

  beforeUnmount () {
    this.$refs.root.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    // This snippet is taken straight from https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    // It will only work on browser so if you are using in an SSR environment, keep your eyes open
    doesBrowserSupportPassiveScroll () {
      let passiveSupported = false

      try {
        const options = {
          get passive () {
            // This function will be called when the browser
            //   attempts to access the passive property.
            passiveSupported = true
            return false
          },
        }

        window.addEventListener('test', null, options)
        window.removeEventListener('test', null)
      } catch (err) {
        passiveSupported = false
      }
      return passiveSupported
    },

    handleScroll (event) {
      this.scrollTop = this.$refs.root.scrollTop
    },

    calculateInitialRowHeight () {
      const children = this.$refs.spacer.children
      let largestHeight = 0
      for (let i = 0; i < children.length; i++) {
        if (children[i].offsetHeight > largestHeight) {
          largestHeight = children[i].offsetHeight
        }
      }
      return largestHeight
    },

    onClickItem (item) {
      this.index = item

      console.log(item)
    },
  },
})
</script>

<style scoped lang="scss">
.picker-column {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;

  .picker-option {
    display: inline-flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 400;
  }
}
</style>
