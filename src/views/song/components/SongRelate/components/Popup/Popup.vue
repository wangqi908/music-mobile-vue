<template>
  <div class="popup" :style="popupStyleObject" ref="popup">
    <div
      class="tab"
      @mousedown="start"
      @mousemove="move"
      @mouseup="end"
      @mouseleave="leave"
      @touchstart="start"
      @touchmove="move"
      @touchend="end"
      ref="tab"
    >
      <div :style="tabStyleObject" class="tab-item">
        <slot name="tab"></slot>
      </div>
    </div>
    <div class="content" :style="contentStyleObject">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { defineComponent, reactive, toRefs, watch, watchEffect } from 'vue'
import { PopupStatus, PopupStateInterface } from '../../interface'
import { handleStyle } from './hooks/useHandleStyle'
import { useHandleDom } from './hooks/useHandleDom'
import { handleMove } from './hooks/useHandleMove'

export default defineComponent({
  emits: ['getOpenStatus'],
  props: {
    height: {
      // 高度 百分比
      type: Number,
      default: 80
    },
    toggleDistance: {
      // 自动展开收缩高度
      type: Number,
      default: 40
    }
  },
  setup (props, { emit }) {
    const route = useRoute()
    const backgroundOpacity = 0.1
    const state: PopupStateInterface = reactive({
      isOpen: false,
      isDragging: false,
      pageY: 0,
      oldBottom: 0,
      distance: 0,
      style: {
        bottom: 0,
        height: props.height,
        backgroundOpacity,
        transition: 'all 0.2s ease-in 0s'
      }
    })

    const { popup, tab, tabHeight, popupHeight } = useHandleDom(
      state,
      props.toggleDistance,
      backgroundOpacity
    )
    // 重置位置
    function resetPosition () {
      state.isOpen = false
      state.isDragging = false
      state.style.bottom = tabHeight.value
    }

    watch(
      () => route.params.id,
      () => {
        // 路由参数变化,组件重置位置
        resetPosition()
      }
    )

    watchEffect(() => {
      const status: PopupStatus = {
        isOpen: state.isOpen,
        isDragging: state.isDragging
      }
      emit('getOpenStatus', status)
    })

    const {
      popupStyleObject,
      tabStyleObject,
      contentStyleObject
    } = handleStyle(state.style, popupHeight, tabHeight)

    const { start, move, end, leave } = handleMove(
      state,
      popupHeight,
      tabHeight,
      props.toggleDistance,
      backgroundOpacity
    )
    return {
      ...toRefs(state),
      popup,
      tab,
      popupStyleObject,
      tabStyleObject,
      contentStyleObject,
      start,
      move,
      end,
      leave
    }
  }
})
</script>

<style scoped lang="less">
.popup {
  position: fixed;
  transform: translateY(100%);
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 24px 24px 0 0;
  .content {
    flex: 1;
  }
}
</style>
