import { ref, computed } from 'vue'
export const setDom = () => {
  const wrapperDom = ref<HTMLMediaElement | null>(null)
  const contentDom = ref<HTMLMediaElement | null>(null)
  const lyricListDom: HTMLElement[] = []
  const setItemRef = (el: HTMLElement) => {
    if (el) {
      lyricListDom.push(el)
    }
  }

  const wrapperHeight = computed(() => {
    return wrapperDom.value?.offsetHeight || 0
  })

  const contentHeight = computed(() => {
    return contentDom.value?.offsetHeight || 0
  })

  return {
    setItemRef,
    wrapperDom,
    contentDom,
    lyricListDom,
    wrapperHeight,
    contentHeight
  }
}
