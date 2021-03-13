<template>
  <div v-if="!loading">
    <p v-for="item in list" :key="item.id" @click="checkList(item.id)">
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
  async setup () {
    const router = useRouter()
    const { list, loading } = useAsyncState(6)

    function checkList (id: number) {
      router.push({ params: { id }, name: 'PlayList' })
    }

    return {
      list,
      loading,
      checkList
    }
  }
})
</script>

<style scoped></style>
