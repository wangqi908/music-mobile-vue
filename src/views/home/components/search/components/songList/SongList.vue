<template>
  <div class="song-list">
    <SongItem :info="item" v-for="item in songList" :key="item.id" showAlbum />
    <div v-if="!hasMore && offset > 1" class="bottom-tip">已经到底了</div>
    <div v-if="!hasMore && songList.length === 0" class="bottom-tip">
      未查到信息
    </div>
  </div>
  <Loading v-if="loading" />
</template>

<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { getInfo } from './hooks/useAsyncState'
import { State } from './interface'
import { SongItem } from '@/components'
import { onReachBottom } from '@/utils'

export default defineComponent({
  components: { SongItem },
  setup () {
    const state: State = reactive({
      hasMore: true,
      loading: false,
      offset: 0,
      songList: []
    })
    const store = useStore()
    const searchValue = computed((): string => store.state.search.searchValue)

    async function search () {
      if (state.hasMore === false || state.loading === true) return
      state.loading = true
      try {
        const { list, songCount } = await getInfo(
          searchValue.value,
          state.offset
        )
        state.songList = [...state.songList, ...list]
        state.loading = false
        if (state.songList.length >= songCount) {
          state.songList.length = songCount
          state.hasMore = false
        }
        state.offset++
      } catch (error) {
        state.loading = false
      }
    }
    search()
    onReachBottom(search)
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
.bottom-tip {
  font-size: 12px;
  color: #ccc;
  text-align: center;
  padding: 10px 0;
}
</style>
