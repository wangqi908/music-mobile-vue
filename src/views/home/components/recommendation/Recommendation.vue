<template>
  <div class="tip margin-top">推荐歌单</div>
  <MySuspense>
    <PlayList />
  </MySuspense>
  <div class="tip">最新音乐</div>
  <MySuspense>
    <SongList />
  </MySuspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PlayList, SongList } from './components'
export default defineComponent({
  components: {
    PlayList,
    SongList
  },
  setup () {
    return {}
  }
})
</script>

<style scoped lang="less">
.margin-top {
  margin-top: 20px;
}
.tip {
  position: relative;
  padding-left: 9px;
  margin-bottom: 14px;
  font-size: 17px;
  height: 20px;
  line-height: 20px;
  &::after {
    content: ' ';
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -9px;
    width: 2px;
    height: 16px;
    background-color: #d33a31;
  }
}
</style>
