<template>
  <div>
    <audio id="audio" controls preload :src="src" ref="audioDom"></audio>
    <Progress
      :audioDom="audioDom"
      v-if="isAudioLaded"
      @changeMediaCurrent="changeMediaCurrent"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue'
import Progress from './Progress/Progress.vue'

export default defineComponent({
  components: { Progress },
  setup () {
    const state = reactive({
      src: 'http://192.168.10.106/song.flac',
      isAudioLaded: false
    })
    const audioDom = ref<HTMLMediaElement | null>(null)

    // 判断audioDom是否加载完毕
    function setAudioLaded () {
      if (audioDom.value !== null) {
        audioDom.value.addEventListener('loadedmetadata', () => {
          state.isAudioLaded = true
        })
      }
    }

    function changeMediaCurrent (time: number) {
      if (audioDom.value) {
        audioDom.value.currentTime = time
      }
    }

    onMounted(() => {
      setAudioLaded()
    })

    return {
      ...toRefs(state),
      audioDom,
      changeMediaCurrent
    }
  }
})
</script>

<style scoped lang="less"></style>
