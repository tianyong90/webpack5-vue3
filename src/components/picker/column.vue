<template>
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
    // const rootHeight = ref(300)
    // const rowHeight = ref(40)
    // const scrollTop = ref(0)
    // const nodePadding = ref(20)
    //
    // return {
    //   rootHeight,
    //   rowHeight,
    //   scrollTop,
    //   nodePadding,
    // }
  },

  data () {
    return {
      rootHeight: 300,
      rowHeight: 40,
      scrollTop: 0,
      nodePadding: 20,
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
      console.log('123')
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
  },
})
</script>

<style scoped lang="scss">
.picker-column {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 200px;
  background: #00f;

  .picker-option {
    display: inline-flex;
    width: 100%;
    height: 40px;
    background-color: #f00;
    color: #fff;
    justify-content: center;
    align-items: center;
  }
}
</style>
