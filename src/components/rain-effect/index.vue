<template>
  <div class="demo-1">
    <div class="image-preload">
      <img
        src="img/drop-color.png"
        alt=""
      >
      <img
        src="img/drop-alpha.png"
        alt=""
      >
      <img src="img/weather/texture-rain-fg.png">
      <img src="img/weather/texture-rain-bg.png">
      <img src="img/weather/texture-sun-fg.png">
      <img src="img/weather/texture-sun-bg.png">
      <img src="img/weather/texture-fallout-fg.png">
      <img src="img/weather/texture-fallout-bg.png">
      <img src="img/weather/texture-drizzle-fg.png">
      <img src="img/weather/texture-drizzle-bg.png">
    </div>
    <div class="container">
      <header class="codrops-header">
        <div class="codrops-links">
          <a
            class="codrops-icon codrops-icon--prev"
            href="http://tympanus.net/Development/CardStackEffects/"
            title="Previous Demo"
          ><span>Previous Demo</span></a>
          <a
            class="codrops-icon codrops-icon--drop"
            href="http://tympanus.net/codrops/?p=25417"
            title="Back to the article"
          ><span>Back to the Codrops article</span></a>
        </div>
        <h1>Rain &amp; Water Effects</h1>
        <nav class="codrops-demos">
          <a
            class="current-demo"
            href="index.html"
          >Weather</a>
          <a href="index2.html">Water</a>
          <a href="index3.html">Video</a>
        </nav>
      </header>
      <div class="slideshow">
        <canvas
          id="container"
          width="1"
          height="1"
          style="position:absolute"
        />
        <!-- Heavy Rain -->
        <div
          id="slide-1"
          class="slide"
          data-weather="rain"
        >
          <div class="slide__element slide__element--date">
            Sunday, 24<sup>th</sup> of October 2043
          </div>
          <div class="slide__element slide__element--temp">
            12°<small>C</small>
          </div>
        </div>
        <!-- Drizzle -->
        <div
          id="slide-2"
          class="slide"
          data-weather="drizzle"
        >
          <div class="slide__element slide__element--date">
            Saturday, 25<sup>th</sup> of October 2043
          </div>
          <div class="slide__element slide__element--temp">
            18°<small>C</small>
          </div>
        </div>
        <!-- Sunny -->
        <div
          id="slide-3"
          class="slide"
          data-weather="sunny"
        >
          <div class="slide__element slide__element--date">
            Monday, 26<sup>th</sup> of October 2043
          </div>
          <div class="slide__element slide__element--temp">
            25°<small>C</small>
          </div>
        </div>
        <!-- Heavy rain -->
        <div
          id="slide-5"
          class="slide"
          data-weather="storm"
        >
          <div class="slide__element slide__element--date">
            Wednesday, 28<sup>th</sup> of October 2043
          </div>
          <div class="slide__element slide__element--temp">
            20°<small>C</small>
          </div>
        </div>
        <!-- Fallout (greenish overlay with slightly greenish/yellowish drops) -->
        <div
          id="slide-4"
          class="slide"
          data-weather="fallout"
        >
          <div class="slide__element slide__element--date">
            Tuesday, 27<sup>th</sup> of October 2043
          </div>
          <div class="slide__element slide__element--temp">
            34°<small>C</small>
          </div>
        </div>
        <nav class="slideshow__nav">
          <a
            class="nav-item"
            href="#slide-1"
          ><i class="icon icon--rainy" /><span>10/24</span></a>
          <a
            class="nav-item"
            href="#slide-2"
          ><i class="icon icon--drizzle" /><span>10/25</span></a>
          <a
            class="nav-item"
            href="#slide-3"
          ><i class="icon icon--sun" /><span>10/26</span></a>
          <a
            class="nav-item"
            href="#slide-5"
          ><i class="icon icon--storm" /><span>10/28</span></a>
          <a
            class="nav-item"
            href="#slide-4"
          ><i class="icon icon--radioactive" /><span>10/27</span></a>
        </nav>
      </div>
      <p class="nosupport">
        Sorry, but your browser does not support WebGL!
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { loadTextures } from './index.js'

export default defineComponent({
  setup () {
    const msg = ref('hello')

    return {
      msg,
    }
  },

  mounted () {
    this.$nextTick(() => {
      loadTextures()
    })
  },
})
</script>

<style scoped lang="scss">

</style>
