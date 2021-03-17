<template>
  <div>
    <button @click="show">show</button>

    <div class="popup" :style="styleObject" ref="popup">
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
        <button>aa</button>
      </div>
      <div class="content">
        <li>aaaaaaaa</li>
        <li>aaaaaaaa</li>
        <li>aaaaaaaa</li>
        <li>aaaaaaaa</li>
        <li>aaaaaaaa</li>
        <li>aaaaaaaa</li>
        <li>aaaaaaaa</li>
        <li>aaaaaaaa</li>
        <li>aaaaaaaa</li>
        <li>aaaaaaaa</li>
      </div>
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
  onMounted
} from 'vue'

export default defineComponent({
  setup () {
    const popup = ref<HTMLElement | null>(null)
    const tab = ref<HTMLElement | null>(null)

    const tabHeight = computed(() => {
      return tab.value?.offsetHeight || 0
    })

    const state = reactive({
      isOpen: false,
      isDragging: false,

      pageY: 0,
      oldBottom: 0,
      style: {
        bottom: 0
      }
    })

    onMounted(() => {
      state.style.bottom = tabHeight.value
    })

    const styleObject = computed(() => {
      const { bottom } = state.style
      return {
        bottom: `${bottom}px`
      }
    })

    function show () {
      state.isOpen = !state.isOpen
      state.isDragging = true
    }

    function start (event: MouseEvent | TouchEvent) {
      let pageY
      if (event.type === 'mousedown') {
        pageY = (event as MouseEvent).pageY
      } else {
        pageY = (event as TouchEvent).touches[0].pageY
      }

      state.isDragging = true
      state.pageY = pageY
      state.oldBottom = state.style.bottom
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

      const popupHeight = popup.value?.offsetHeight || 0
      if (newBottom >= popupHeight) {
        return
      }
      if (newBottom <= tabHeight.value) {
        state.style.bottom = tabHeight.value
        return
      }
      state.style.bottom = newBottom

      const flag = Math.abs(distance) >= 40

      console.log(flag)
    }
    function leave () {
      state.isDragging = false
    }
    function end () {
      state.isDragging = false
    }

    return {
      ...toRefs(state),
      popup,
      tab,
      styleObject,
      show,
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
  border: 1px solid #000;
  position: fixed;
  height: 80%;
  transform: translateY(100%);
  width: 100%;
  // transition: all 0.3s;
  background-color: rgb(220, 222, 228);
  display: flex;
  flex-direction: column;
}
.tab {
  border-bottom: 1px solid #ccc;
  padding: 18px 0;
}
li {
  border: 1px solid #000;
  margin: 10px;
}
.content {
  flex: 1;
  overflow: auto;
}
</style>
