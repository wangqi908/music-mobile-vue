<template>
  <div v-if="!loading" class="hot-song">
    <SongItem :info="item" v-for="item in list" :key="item.id" />
  </div>
  <Loading v-else isFullScreen />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAsyncState } from './hooks/useAsyncState'
import { SongItem } from '@/components'

export default defineComponent({
  components: { SongItem },
  setup () {
    const { list, loading } = useAsyncState()

    return {
      loading,
      list
    }
  }
})
</script>

<style scoped lang="less">
.song-list {
  border: 1px solid #000;
}
</style>
