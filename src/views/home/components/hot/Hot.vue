<template>
  <div class="hot-song">
    <div class="banner-wrap">
      <div class="hot-icon"></div>
      <div class="hot-time" v-if="updateTime">
        更新日期：{{ $filters.formatTimeAll(updateTime) }}
      </div>
    </div>
    <SongList @getInfo="getInfo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { SongListInfo } from '@/interface/song'
import SongList from '@/components/SongList/SongList.vue'

export default defineComponent({
  components: { SongList },
  setup () {
    const state = reactive({
      updateTime: 0
    })

    function getInfo (songListInfo: SongListInfo) {
      state.updateTime = songListInfo.updateTime
    }
    return {
      getInfo,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
.banner-wrap {
  position: relative;
  padding-top: 39%;
  overflow: hidden;
  background: url('./img/hot_music_bg_2x.jpg') no-repeat;
  background-size: contain;
}
.hot-icon {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 142px;
  height: 67px;
  background: url(./img/index_icon_2x.png) no-repeat;
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
