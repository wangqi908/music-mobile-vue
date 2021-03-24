<template>
  <div class="test">
    <div class="shade"></div>
  </div>

  <div class="song-content">
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

<style scoped lang="less">
.test {
  background-image: url(http://p1.music.126.net/R0wMPraoQqedutLeQz2okA==/109951163269912492.jpg?imageView&thumbnail=50y50&quality=15&tostatic=0);
  opacity: 1;
  transform: scale(1.5);
  filter: blur(30px);
  background-color: #161824;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  transform-origin: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}
.shade {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 50%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
}
.song-content {
  position: absolute;
  border: 1px solid #000;
  z-index: 10;
}
</style>
