<template>
  <div v-if="!loading">
    <p v-for="item in list" :key="item.id" @click="checkSong(item.id)">
      {{ item.name }}
    </p>
  </div>
  <Loading v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useAsyncState } from './hooks/useAsyncState'

export default defineComponent({
  setup () {
    const router = useRouter()
    const { list, loading } = useAsyncState(30)
    function checkSong (id: number) {
      router.push({ params: { id }, name: 'Song' })
    }
    return {
      checkSong,
      loading,
      list
    }
  }
})
</script>

<style scoped></style>
