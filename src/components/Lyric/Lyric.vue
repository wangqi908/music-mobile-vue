<template>
  <div class="wrapper" ref="wrapperDom">
    <ul class="content" ref="contentDom">
      <li
        v-for="(item, index) in lyricList"
        :key="item.ms + index"
        :class="['lyric-item', { active: activeIndex === index }]"
        :ref="setItemRef"
        @dblclick="lyricClick(item)"
      >
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, PropType } from 'vue'
import { handleLrc } from './hooks/userHandleLrc'
import { setDom } from './hooks/userHandleDom'
import { handleBScroll } from './hooks/userHandleBScroll'
import { LyricListItem } from './interface'

export default defineComponent({
  emits: ['changeCurrent'],
  props: {
    lyric: {
      type: String,
      required: true
    },
    audioDom: {
      type: Object as PropType<HTMLMediaElement>,
      required: true
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
    function lyricClick (item: LyricListItem) {
      if (props.audioDom !== null) {
        emit('changeCurrent', item.ms / 1000)
      }
    }

    return {
      ...toRefs(state),
      lyricClick,
      setItemRef,
      wrapperDom,
      contentDom,
      activeIndex
    }
  }
})
</script>

<style lang="less" scoped>
.test {
  height: 100%;
  .wrapper {
    overflow: hidden;
    background: rgba(0, 0, 0, 0.2);
    height: 500px;
    .content {
      border: 4px solid rgb(207, 67, 67);

      .lyric-item {
        color: #999;
        transition: all 1s;
      }

      .active {
        background-color: rgb(144, 252, 243);
      }
    }
  }
}
</style>
