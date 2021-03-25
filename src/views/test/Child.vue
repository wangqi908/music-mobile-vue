<template>
  <div>
    child
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup () {
    onMounted(() => {
      console.log('onMounted')
    })
    return {}
  }
})
</script>

<style scoped></style>
