<template>
  <div>
    <Popup @getOpenStatus="getOpenStatus" v-if="songRelateInfo.length !== 0">
      <template #tab>
        <ul class="tab-box">
          <li
            v-for="(item, index) in songRelateInfo"
            :key="index"
            @click="moveTo(index)"
            :class="{ active: active === index && isOpen }"
          >
            {{ item.type }}
          </li>
        </ul>
      </template>
      <template #content>
        <div class="content-box wrapper" ref="wrapper">
          <div class="content">
            <ul
              v-for="(section, index) in songRelateInfo"
              :key="index"
              class="section-content"
              :ref="setItemRef"
            >
              <keep-alive>
                <component :is="section.type" :info="section"></component>
              </keep-alive>
            </ul>
          </div>
        </div>
      </template>
    </Popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref } from 'vue'
import { Popup, SimilarPlaylist, SimilarSong, Comment } from './components'
import uesHandleCardMove from './hooks/uesHandleCardMove'
import useAsyncState from './hooks/useAsyncState'

import { PlaylistInfo, SimiSongInfo, CommentInfo } from './interface'

export default defineComponent({
  components: {
    Popup,
    SimilarPlaylist,
    SimilarSong,
    Comment
  },
  setup () {
    const state = reactive({
      isOpen: false,
      songRelateInfo: [] as (PlaylistInfo | SimiSongInfo | CommentInfo)[]
    })
    const wrapper = ref<HTMLElement | null>(null)
    function getOpenStatus (val: boolean) {
      state.isOpen = val
    }

    const { setItemRef, moveTo, active } = uesHandleCardMove(wrapper)

    onMounted(async () => {
      const { simiPlaylist, simiSong, comment } = await useAsyncState(77470)
      const songRelateInfo = [simiPlaylist, simiSong, comment].filter(
        item => item.status
      )
      console.log(songRelateInfo)
      state.songRelateInfo = songRelateInfo
    })
    return {
      ...toRefs(state),
      moveTo,
      active,
      setItemRef,
      getOpenStatus,
      wrapper
    }
  }
})
</script>

<style scoped lang="less">
.tab-box {
  display: flex;
  justify-content: space-between;
  li {
    text-align: center;
    border: 1px solid #ccc;
    flex: 1;
  }
  .active {
    border-bottom: 2px solid #f00;
  }
}
.content-box {
  height: 100%;
}
.wrapper {
  overflow: hidden;
}
</style>
