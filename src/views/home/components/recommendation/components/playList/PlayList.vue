<template>
  <div v-if="!loading" class="playList">
    <PlaylistItem v-for="item in list" :key="item.id" :info="item" />
  </div>
  <Loading v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAsyncState } from './hooks/useAsyncState'
import { PlaylistItem } from '@/components'

export default defineComponent({
  components: { PlaylistItem },
  async setup () {
    const { list, loading } = useAsyncState(6)

    return {
      list,
      loading
    }
  }
})
</script>

<style scoped lang="less">
.playList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;

  &::after {
    content: '';
    width: 33.33%;
  }
}
</style>
