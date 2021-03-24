import { computed, ComputedRef } from 'vue'
import { toFixedNum } from '@/utils'
import { PopupStyleInterface } from '../../../interface'

export const handleStyle = (
  style: PopupStyleInterface,
  popupHeight: ComputedRef<number>,
  tabHeight: ComputedRef<number>
) => {
  const popupStyleObject = computed(() => {
    const { bottom, transition, backgroundOpacity, height } = style
    return {
      bottom: `${bottom}px`,
      height: `${height}%`,
      transition,
      backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`
    }
  })
  const tabStyleObject = computed(() => {
    const { backgroundOpacity } = style
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
  return {
    popupStyleObject,
    tabStyleObject,
    contentStyleObject
  }
}
