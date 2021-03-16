<template>
  <div v-if="!loading" class="hot-song">
    <SongItem :info="item" v-for="item in list" :key="item.id" />
  </div>
  <Loading v-else isFullScreen />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SongItem } from '@/components'
import { useAsyncState } from './useAsyncState'

export default defineComponent({
  props: {
    id: {
      type: String,
      default: '3778678' // 默认热门歌单
    }
  },
  emits: ['getInfo'],
  components: { SongItem },
  setup (props, { emit }) {
    const { list, loading, updateTime } = useAsyncState(props.id)

    emit('getInfo', { list, loading, updateTime })

    return {
      loading,
      updateTime,
      list
    }
  }
})
</script>

<style scoped lang="less"></style>
