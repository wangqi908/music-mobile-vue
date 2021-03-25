<template>
  <div class="test">
    <div class="shade"></div>
  </div>

  <div class="song-content">
    <audio id="audio" controls preload :src="src" ref="audioDom"></audio>
    <div class="body-box">
      <transition name="fade" mode="out-in">
        <button @click="showLrc" v-if="!isShowLrc">歌词</button>
        <Lyric
          v-else
          v-model:isShowLrc="isShowLrc"
          :audioDom="audioDom"
          :lyric="lyric"
        />
      </transition>
    </div>
    <div class="progress-box">
      <Progress
        v-if="isAudioLaded"
        :audioDom="audioDom"
        @changeMediaCurrent="changeMediaCurrent"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue'
import Lyric from '@/components/Lyric/Lyric.vue'
import Progress from './Progress/Progress.vue'

export default defineComponent({
  components: { Lyric, Progress },
  setup () {
    const state = reactive({
      isShowLrc: false,
      isAudioLaded: false,
      src: '',
      lyric: ''
    })
    const audioDom = ref<HTMLMediaElement | null>(null)

    const src = require('./url.json').data[0].url
    const lyric = require('./lyric.json').lrc.lyric
    state.src = src
    state.lyric = lyric

    function showLrc () {
      state.isShowLrc = true
    }

    // 判断audioDom是否加载完毕
    function setAudioLaded () {
      if (audioDom.value !== null) {
        audioDom.value.addEventListener('loadedmetadata', () => {
          state.isAudioLaded = true
        })
      }
    }
    // 改变歌曲进度
    function changeMediaCurrent (time: number) {
      if (audioDom.value) {
        audioDom.value.currentTime = time
      }
    }

    onMounted(() => {
      setAudioLaded()
    })

    return {
      audioDom,
      showLrc,
      changeMediaCurrent,
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
  filter: blur(170px);
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
  z-index: 10;
  width: 100%;
  height: 100%;
}
#audio {
  display: none;
}
.body-box {
  height: 70%;
  border: 1px solid #000;
}
.progress-box {
  height: 30%;
  border: 1px solid #000;
}
</style>
