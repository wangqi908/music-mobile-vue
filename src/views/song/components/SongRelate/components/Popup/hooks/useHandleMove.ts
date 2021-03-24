import { ComputedRef } from 'vue'
import { toFixedNum } from '@/utils'
import { PopupStateInterface } from '../../../interface'

export const handleMove = (
  state: PopupStateInterface,
  popupHeight: ComputedRef<number>,
  tabHeight: ComputedRef<number>,
  toggleDistance: number,
  backgroundOpacity: number
) => {
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
    start,
    move,
    leave,
    end
  }
}
