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
import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  computed,
  onMounted,
  watch,
  watchEffect
} from 'vue'
import { PopupStatus } from '../interface'

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
    function toFixedNum (num: number, lang = 0) {
      return Number(num.toFixed(lang))
    }
    const popup = ref<HTMLElement | null>(null)
    const tab = ref<HTMLElement | null>(null)

    const tabHeight = computed(() => {
      return tab.value?.offsetHeight || 0
    })
    const popupHeight = computed(() => {
      return popup.value?.offsetHeight || 0
    })

    const backgroundOpacity = 0.1
    const state = reactive({
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

    onMounted(() => {
      state.style.bottom = tabHeight.value

      watch(
        () => state.style.bottom,
        val => {
          const { distance, isOpen } = state
          const toggleDistance = props.toggleDistance

          if (distance > 0) {
            const present = distance / toggleDistance
            let opacity =
              present >= 1
                ? 1
                : present <= backgroundOpacity
                  ? backgroundOpacity
                  : present

            if (val - tabHeight.value === 0) opacity = backgroundOpacity

            state.style.backgroundOpacity = opacity
          }

          if (isOpen) {
            const present = (val - tabHeight.value) / toggleDistance

            let opacity =
              present <= backgroundOpacity ? backgroundOpacity : present
            opacity = opacity > 1 ? 1 : opacity
            state.style.backgroundOpacity = opacity
          }
        }
      )
    })

    watchEffect(() => {
      const status: PopupStatus = {
        isOpen: state.isOpen,
        isDragging: state.isDragging
      }
      emit('getOpenStatus', status)
    })

    const popupStyleObject = computed(() => {
      const { bottom, transition, backgroundOpacity, height } = state.style
      return {
        bottom: `${bottom}px`,
        height: `${height}%`,
        transition,
        backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`
      }
    })
    const tabStyleObject = computed(() => {
      const { backgroundOpacity } = state.style
      const opacity = toFixedNum(backgroundOpacity + 0.2, 2)
      return {
        color: `rgba(55, 55, 55, ${opacity})`
      }
    })
    const contentStyleObject = computed(() => {
      const contentHeight = popupHeight.value - tabHeight.value
      return {
        height: `${contentHeight}px`
      }
    })

    function start (event: MouseEvent | TouchEvent) {
      state.style.transition = 'all 0s ease-in 0s'

      let pageY
      if (event.type === 'mousedown') {
        pageY = (event as MouseEvent).pageY
      } else {
        pageY = (event as TouchEvent).touches[0].pageY
      }

      state.isDragging = true
      state.pageY = toFixedNum(pageY)
      state.oldBottom = toFixedNum(state.style.bottom)
    }
    function move (event: MouseEvent | TouchEvent) {
      if (!state.isDragging) return
      let pageY
      if (event.type === 'mousemove') {
        pageY = (event as MouseEvent).pageY
      } else {
        pageY = (event as TouchEvent).touches[0].pageY
      }
      const oldBottom = state.oldBottom

      const distance = state.pageY - pageY
      const newBottom = oldBottom + distance

      if (newBottom >= popupHeight.value) {
        return
      }
      if (newBottom <= tabHeight.value) {
        state.style.bottom = tabHeight.value
        return
      }
      state.style.bottom = toFixedNum(newBottom)
      state.distance = toFixedNum(distance)
    }
    function leave () {
      state.isDragging = false
    }
    function end () {
      state.isDragging = false

      const { distance, isOpen } = state
      const toggleDistance = props.toggleDistance

      if (distance <= toggleDistance && !isOpen) {
        state.style.bottom = toFixedNum(tabHeight.value)
        state.isOpen = false
      }
      if (distance > toggleDistance && !isOpen) {
        state.style.bottom = toFixedNum(popupHeight.value)
        state.isOpen = true
      }
      if (distance >= -toggleDistance && isOpen) {
        state.style.bottom = toFixedNum(popupHeight.value)
        state.isOpen = true
      }
      if (distance < -toggleDistance && isOpen) {
        state.style.bottom = toFixedNum(tabHeight.value)
        state.isOpen = false
        state.style.backgroundOpacity = backgroundOpacity
      }
      state.style.transition = 'all 0.2s ease-in 0s'
    }

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
