<template>
  <div>
    <div class="wrapper">
      <ul class="content">
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import BScroll from '@better-scroll/core'

export default defineComponent({
  setup () {
    onMounted(() => {
      new BScroll('.wrapper', {})
    })
    return {}
  }
})
</script>

<style scoped>
.wrapper {
  height: 100px;
  overflow: hidden;
  box-sizing: border-box;
}
.content {
  box-sizing: border-box;
  background-color: rgb(196, 191, 191);
}
</style>
