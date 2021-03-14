<template>
  <Suspense>
    <template #default>
      <slot></slot>
    </template>
    <template #fallback>
      <Loading :isFullScreen="isFullScreen" />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured } from 'vue'
import Loading from './Loading.vue'

export default defineComponent({
  props: {
    isFullScreen: {
      type: Boolean,
      default: false
    }
  },
  components: { Loading },
  setup () {
    onErrorCaptured(e => {
      console.log(e)
      return true
    })
  }
})
</script>

<style scoped lang="less"></style>
