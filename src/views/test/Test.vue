<template>
  <div>
    <input v-model="searchValue" />
    <button @click="search">search</button>
    <div class="box">
      <div v-for="(item, index) in songList" :key="item.id">
        <p>{{ index }}</p>
        <p>{{ item.name }}</p>
        <p>{{ item.artistName }}---{{ item.albumName }}</p>
        <hr />
      </div>
      <div v-if="!hasMore">已经到底了</div>
    </div>
    <Loading v-if="loading" />
    {{ loading }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { getInfo } from './useTest'
import { State } from './interface'
import { onReachBottom } from '@/utils'

export default defineComponent({
  setup () {
    const state: State = reactive({
      searchValue: '周杰伦 搁浅',
      hasMore: true,
      loading: false,
      offset: 0,
      songList: []
    })

    async function search () {
      if (state.hasMore === false) return
      state.loading = true
      try {
        const { list, songCount } = await getInfo(
          state.searchValue,
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
    onReachBottom(search)
    return {
      search,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped></style>
