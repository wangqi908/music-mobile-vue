<template>
  <div v-if="!loading" class="play-list">
    {{ name }}
  </div>
  <Loading v-else isFullScreen />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAsyncState } from './hooks/useAsyncState'

export default defineComponent({
  setup () {
    const { name, loading } = useAsyncState()
    return {
      name,
      loading
    }
  }
})
</script>

<style scoped>
.play-list {
}
</style>
