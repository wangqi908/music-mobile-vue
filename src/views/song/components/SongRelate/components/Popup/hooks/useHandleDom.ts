import { computed, ref, onMounted, watch } from 'vue'
import { PopupStateInterface } from '../../../interface'

export const useHandleDom = (
  state: PopupStateInterface,
  toggleDistance: number,
  backgroundOpacity: number
) => {
  const popup = ref<HTMLElement | null>(null)
  const tab = ref<HTMLElement | null>(null)

  const tabHeight = computed(() => {
    return tab.value?.offsetHeight || 0
  })
  const popupHeight = computed(() => {
    return popup.value?.offsetHeight || 0
  })

  onMounted(() => {
    state.style.bottom = tabHeight.value

    // 判断是否回弹
    watch(
      () => state.style.bottom,
      val => {
        const { distance, isOpen } = state

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

  return {
    popup,
    tab,
    tabHeight,
    popupHeight
  }
}
