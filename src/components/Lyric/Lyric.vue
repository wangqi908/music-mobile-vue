<template>
  <div class="wrapper" ref="wrapperDom" @click="warpperClick">
    <ul class="content" ref="contentDom" v-if="lyricList.length">
      <li
        v-for="(item, index) in lyricList"
        :key="item.ms + index"
        :class="['lyric-item', { active: activeIndex === index }]"
        :ref="setItemRef"
      >
        {{ item.content }}
      </li>
    </ul>
    <div class="no-lrc" v-else>
      纯音乐，无歌词
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, PropType } from 'vue'
import { handleLrc } from './hooks/useHandleLrc'
import { setDom } from './hooks/useHandleDom'
import { handleBScroll } from './hooks/useHandleBScroll'
import { LyricListItem } from './interface'

export default defineComponent({
  props: {
    lyric: {
      type: String,
      required: true
    },
    audioDom: {
      type: Object as PropType<HTMLMediaElement>,
      required: true
    },
    isShowLrc: {
      type: Boolean
    }
  },
  setup (props, { emit }) {
    // 设置dom
    const {
      setItemRef,
      wrapperDom,
      contentDom,
      lyricListDom,
      wrapperHeight,
      contentHeight
    } = setDom()
    const state = reactive({
      lyricList: [] as LyricListItem[]
    })

    // 处理歌词
    state.lyricList = handleLrc(props.lyric)

    // 歌词滚动
    const { activeIndex } = handleBScroll(
      wrapperHeight,
      contentHeight,
      props.audioDom,
      lyricListDom,
      state.lyricList
    )

    // 双击歌词跳转时间
    // function lyricClick (item: LyricListItem) {
    //   if (props.audioDom !== null) {
    //     emit('changeCurrent', item.ms / 1000)
    //   }
    // }
    function warpperClick () {
      emit('update:isShowLrc', false)
    }

    return {
      ...toRefs(state),
      setItemRef,
      wrapperDom,
      contentDom,
      activeIndex,
      warpperClick
    }
  }
})
</script>

<style lang="less" scoped>
.wrapper {
  overflow: hidden;
  height: 100%;
  z-index: 10;
  .content {
    .lyric-item {
      transition: all 1s;
      color: hsla(0, 0%, 100%, 0.4);
      font-size: 15px;
      text-align: center;
      padding: 10px;
    }
    .active {
      color: hsla(0, 0%, 100%, 0.9);
    }
  }

  .no-lrc {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: hsla(0, 0%, 100%, 0.4);
  }
}
</style>
