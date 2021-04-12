<template>
  <Popup @getOpenStatus="getOpenStatus" v-if="songRelateInfo.length !== 0">
    <template #tab>
      <div :class="['line-bar', isOpen ? 'line-bar-active' : '']"></div>
      <ul class="tab-box">
        <li
          v-for="(item, index) in songRelateInfo"
          :key="index"
          @click="moveTo(index)"
          :class="{ active: active === index && isOpen }"
          class="relate-title"
        >
          <span :style="titleStyle">
            {{ $filters.formatSongRelateTitle(item.type) }}
          </span>
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
            <component :is="section.type" :info="section"></component>
          </ul>
        </div>
      </div>
    </template>
  </Popup>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  ref,
  computed,
  watch
} from 'vue'
import { Popup, SimilarPlaylist, SimilarSong, Comment } from './components'
import uesHandleCardMove from './hooks/uesHandleCardMove'
import useAsyncState from './hooks/useAsyncState'

import {
  PlaylistInfo,
  SimiSongInfo,
  CommentInfo,
  PopupStatus
} from './interface'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    Popup,
    SimilarPlaylist,
    SimilarSong,
    Comment
  },
  setup (props) {
    const state = reactive({
      isOpen: false,
      isDragging: false,
      songRelateInfo: [] as (PlaylistInfo | SimiSongInfo | CommentInfo)[]
    })
    const wrapper = ref<HTMLElement | null>(null)
    function getOpenStatus (val: PopupStatus) {
      state.isOpen = val.isOpen
      state.isDragging = val.isDragging
    }

    const titleStyle = computed(() => {
      if (state.isOpen || state.isDragging) {
        return {
          color: '#333'
        }
      } else {
        return {}
      }
    })

    const { setItemRef, moveTo, active } = uesHandleCardMove(wrapper)

    async function getInfoAsync () {
      const { simiPlaylist, simiSong, comment } = await useAsyncState(
        Number(props.id)
      )
      const songRelateInfo = [simiPlaylist, simiSong, comment].filter(
        item => item.status && item.list.length
      )
      state.songRelateInfo = songRelateInfo
    }

    onMounted(() => {
      getInfoAsync()
      // todo 禁止下拉刷新
    })

    watch(
      () => props.id,
      () => {
        getInfoAsync()
      }
    )

    return {
      ...toRefs(state),
      moveTo,
      active,
      setItemRef,
      getOpenStatus,
      wrapper,
      titleStyle
    }
  }
})
</script>

<style scoped lang="less">
.tab-box {
  display: flex;
  justify-content: space-between;
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
.section-content {
  padding: 10px;
}
.line-bar {
  width: 54px;
  height: 5px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 10px;
  background: hsla(0, 0%, 100%, 0.1);
}
.line-bar-active {
  background: rgba(51, 51, 51, 0.1);
}
.relate-title {
  text-align: center;
  flex: 1;
  color: hsla(0, 0%, 100%, 0.2);
  font-size: 14px;
  padding: 10px 0;
}
</style>
