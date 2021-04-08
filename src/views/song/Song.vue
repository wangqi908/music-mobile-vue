<template>
  <div class="background" :style="bgStyle">
    <div class="shade"></div>
  </div>

  <div class="song-content" v-if="!loading">
    <audio
      id="audio"
      controls
      preload
      autoplay
      :src="src"
      ref="audioDom"
    ></audio>
    <div class="body-box">
      <transition name="fade" mode="out-in">
        <div class="info" v-if="!isShowLrc" @click="showLrc">
          <Cover :info="songInfo" :isPlaying="isPlaying" />
        </div>
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
        v-if="isAudioLaded && audioDom"
        :audioDom="audioDom"
        @changeMediaCurrent="changeMediaCurrent"
        @onTogglePlay="togglePlay"
      />
    </div>
  </div>

  <Loading isFullScreen v-else />
  <SongRelate :id="id" />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted, watch } from 'vue'
import Lyric from '@/components/Lyric/Lyric.vue'
import Progress from '@/components/Progress/Progress.vue'
import { useRoute } from 'vue-router'
import useAsyncState from './hooks/useAsyncState'
import SongRelate from './components/SongRelate/SongRelate.vue'
import Cover from './components/Cover/Cover.vue'

export default defineComponent({
  components: { SongRelate, Lyric, Progress, Cover },
  setup () {
    const route = useRoute()
    const state = reactive({
      id: route.params.id as string,
      songInfo: {},
      loading: false,
      isShowLrc: false,
      isAudioLaded: false,
      isPlaying: true,
      src: '',
      lyric: '',
      bgStyle: {
        backgroundImage: ''
      }
    })
    const audioDom = ref<HTMLMediaElement | null>(null)

    function showLrc () {
      state.isShowLrc = true
    }

    function togglePlay (isPlaying: boolean) {
      state.isPlaying = isPlaying
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
        audioDom.value.play()
      }
    }

    async function getInfo () {
      state.loading = true
      try {
        const { songInfo, src, lyric } = await useAsyncState(state.id)
        state.loading = false
        state.songInfo = songInfo
        state.bgStyle.backgroundImage = `url(${songInfo.picUrl}?imageView&thumbnail=50y50&quality=15&tostatic=0) `
        state.src = src
        state.lyric = lyric
      } catch (error) {
        state.loading = false
        console.log(error)
      }
    }

    onMounted(async () => {
      await getInfo()
      await setAudioLaded()
    })

    watch(
      () => route.params.id,
      val => {
        state.id = val as string
      }
    )

    return {
      audioDom,
      showLrc,
      changeMediaCurrent,
      togglePlay,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
.background {
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
.info {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
