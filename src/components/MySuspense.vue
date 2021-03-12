<template>
  <Suspense>
    <template #default>
      <slot></slot>
    </template>
    <template #fallback>
      <div class="loading">loading</div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured } from 'vue'

export default defineComponent({
  setup () {
    onErrorCaptured(e => {
      console.log(e)
      return true
    })
  }
})
</script>

<style scoped></style>
