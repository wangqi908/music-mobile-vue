<template>
  <div v-if="!loading" class="song-list">
    <SongItem :info="item" v-for="item in list" :key="item.id" />
  </div>
  <Loading v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAsyncState } from './hooks/useAsyncState'
import { SongItem } from '@/components'

export default defineComponent({
  components: { SongItem },
  setup () {
    const { list, loading } = useAsyncState(10)

    return {
      loading,
      list
    }
  }
})
</script>

<style scoped lang="less"></style>
