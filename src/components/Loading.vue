<template>
  <div class="loading-component-box" :class="{ full: isFullScreen }">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isFullScreen: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="less">
.loading-component-box {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  span {
    display: inline-block;
    width: 4px;
    border-radius: 4px;
    background: lightgreen;
    animation: load-keyframes 1s ease infinite;
    margin: 0 2px;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }
  span:nth-child(4) {
    animation-delay: 0.6s;
  }
  span:nth-child(5) {
    animation-delay: 0.8s;
  }
}
@keyframes load-keyframes {
  0%,
  100% {
    height: 20px;
    background: lightgreen;
  }
  50% {
    height: 30px;

    background: lightblue;
  }
}
.full {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
