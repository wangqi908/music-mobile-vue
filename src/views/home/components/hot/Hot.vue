<template>
  <div v-if="!loading" class="hot-song">
    <div class="banner-wrap">
      <div class="hot-icon"></div>
      <div class="hot-time">
        更新日期：{{ $filters.formatTimeAll(updateTime) }}
      </div>
    </div>
    <SongItem :info="item" v-for="item in list" :key="item.id" />
  </div>
  <Loading v-else isFullScreen />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SongItem } from '@/components'
import { useAsyncState } from './hooks/useAsyncState'

export default defineComponent({
  components: { SongItem },
  setup () {
    const { list, loading, updateTime } = useAsyncState()

    return {
      updateTime,
      loading,
      list
    }
  }
})
</script>

<style scoped lang="less">
.banner-wrap {
  position: relative;
  padding-top: 39%;
  overflow: hidden;
  background: url(https://s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee=)
    no-repeat;
  background-size: contain;
}
.hot-icon {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 142px;
  height: 67px;
  background: url(https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=)
    no-repeat;
  background-size: 166px 97px;
  background-position: -24px -30px;
}
.hot-time {
  position: absolute;
  top: 100px;
  left: 20px;
  font-size: 13px;
  color: hsla(0, 0%, 100%, 0.8);
}
</style>
