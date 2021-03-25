import { onMounted, ref } from 'vue'

export const useHandlePlayer = (audioDom: HTMLMediaElement) => {
  const isPlaying = ref(false)
  function togglePlay () {
    if (isPlaying.value) {
      isPlaying.value = false
      audioDom.pause()
    } else {
      isPlaying.value = true
      audioDom.play()
    }
  }

  onMounted(() => {
    audioDom.addEventListener('playing', () => {
      isPlaying.value = true
    })
    audioDom.addEventListener('pause', () => {
      isPlaying.value = false
    })
  })

  return {
    isPlaying,
    togglePlay
  }
}
