<template>
  <div>
    <button @click="show">show</button>
    <div
      class="popup"
      :style="styleObject"
      @mousedown="start"
      @mousemove="move"
      @mouseup="end"
    >
      aa
    </div>
    {{ isOpen }}
    {{ styleObject }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup () {
    const state = reactive({
      isOpen: false,
      styleObject: {
        bottom: 50
      },
      pageY: 0,
      distance: 0,
      isDragging: false
    })

    function show () {
      state.isOpen = !state.isOpen
      state.isDragging = true
      state.styleObject.bottom = state.isOpen ? 400 : 50
    }

    function start (event: MouseEvent) {
      const { pageY } = event
      state.isDragging = true
      state.pageY = pageY
    }
    function move (event: MouseEvent) {
      if (!state.isDragging) return
      const { pageY } = event
      // const distance = state.pageY - pageY
      console.log(pageY)
      // const bottom = state.styleObject.bottom
      // console.log(distance)

      // state.styleObject.bottom = 50 + distance
      // state.styleObject.bottom=
      // console.log(event)
    }
    function end (event: MouseEvent) {
      state.isDragging = false
    }

    const styleObject = computed(() => {
      const { bottom } = state.styleObject
      return {
        bottom: `${bottom}px`
      }
    })

    return {
      ...toRefs(state),
      show,
      start,
      move,
      end,
      styleObject
    }
  }
})
</script>

<style scoped lang="less">
.popup {
  border: 1px solid #000;
  position: fixed;
  height: 400px;
  transform: translateY(100%);
  width: 100%;
  transition: all 0.3s;
  background-color: rgba(145, 168, 243, 0.9);
}
</style>
