import { ref, computed, Ref } from 'vue'
export const uesHandleDom = (
  present: Ref<number>,
  audioDom: HTMLMediaElement
) => {
  const progressDom = ref<HTMLElement | null>(null)
  const progressWidth = computed(() => {
    return progressDom.value?.offsetWidth || 0
  })

  const innerStyle = computed(() => {
    return {
      width: present.value * 100 + '%'
    }
  })

  // 歌曲时长
  const songDuration = computed(() => {
    return audioDom.duration || 0
  })

  // 当前时间
  const songCurrentTime = computed(() => {
    return audioDom.currentTime
  })

  return {
    progressDom,
    progressWidth,
    innerStyle,
    songDuration,
    songCurrentTime
  }
}
