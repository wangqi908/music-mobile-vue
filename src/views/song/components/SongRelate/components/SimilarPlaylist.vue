<template>
  <div class="similar-playlist">
    <h2 class="title">包含这首歌的歌单</h2>
    <div class="playlist-wrap">
      <div class="playlist-item" v-for="item in info.list" :key="item.id">
        <PlaylistItem :info="item" showCreatorName />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PlaylistItem } from '@/components'
import { PlaylistItemInterface } from '@/interface/playlist'

export default defineComponent({
  components: { PlaylistItem },
  props: {
    info: Object as PropType<PlaylistItemInterface[]>
  },
  setup () {
    return {}
  }
})
</script>

<style scoped lang="less">
.similar-playlist {
  .title {
    color: #333;
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 6px;
  }
  .playlist-wrap {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .playlist-item {
      width: 31%;
      height: calc(31vw + 33px);
    }
  }
}
</style>
