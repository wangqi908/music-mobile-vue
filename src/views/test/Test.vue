<template>
  <div class="test">
    <audio id="audio" controls preload :src="src" ref="audioDom"></audio>
    <Lyric
      :audioDom="audioDom"
      :lyric="lyric"
      v-if="audioDom"
      @changeCurrent="changeCurrent"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import Lyric from '@/components/Lyric/Lyric.vue'

export default defineComponent({
  components: { Lyric },
  setup () {
    const state = reactive({
      src: '',
      lyric: ''
    })
    const audioDom = ref<HTMLMediaElement | null>(null)

    const src = require('./url.json').data[0].url
    const lyric = require('./lyric.json').lrc.lyric
    state.src = src
    state.lyric = lyric

    function changeCurrent (currentTime: number) {
      if (audioDom.value) {
        audioDom.value.currentTime = currentTime
      }
    }

    return {
      audioDom,
      changeCurrent,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped></style>
