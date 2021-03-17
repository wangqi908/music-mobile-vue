<template>
  <div v-if="!loading" class="hot-song">
    <SongItem :info="item" v-for="item in list" :key="item.id" />
  </div>
  <Loading v-else isFullScreen />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useAsyncState } from './useAsyncState'
import { SongInfo } from '@/interface/song'
import { SongItem } from '@/components'

export default defineComponent({
  props: {
    id: {
      type: String,
      default: '3778678' // 默认热门歌单
    }
  },
  components: { SongItem },
  emits: ['getInfo'],
  setup (props, { emit }) {
    const state = reactive({
      list: [] as SongInfo[],
      loading: false
    })
    state.loading = true
    async function getInfo () {
      try {
        const {
          list,
          updateTime,
          coverImgUrl,
          creator,
          name
        } = await useAsyncState(props.id)
        state.loading = false
        state.list = list

        emit('getInfo', {
          list,
          updateTime,
          coverImgUrl,
          creator,
          name
        })
      } catch (error) {
        state.loading = false
        emit('getInfo', { err: error })
      }
    }
    onMounted(() => {
      getInfo()
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped></style>
