<template>
  <div v-if="!loading">
    {{ name }}
  </div>
  <Loading v-else />
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

<style scoped></style>
