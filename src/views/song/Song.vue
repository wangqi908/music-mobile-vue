<template>
  <div>
    <div class="bg" :style="bgStyle"></div>
    <div class="song">
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
              <div class="meta">
                <p>{{ songInfo.name }}</p>
                <p>{{ songInfo.artistName }}</p>
              </div>
            </div>
            <div class="lyric-wrap" v-else>
              <Lyric
                v-model:isShowLrc="isShowLrc"
                :audioDom="audioDom"
                :lyric="lyric"
              />
            </div>
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
    </div>
  </div>
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
          // if (audioDom.value) {
          //   // 刷新页面自动播放
          //   audioDom.value.muted = false
          //   audioDom.value.play()
          // }
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
        state.bgStyle.backgroundImage = `url(${songInfo.picUrl}?imageView&thumbnail=650y650&quality=15&tostatic=0) `
        state.src = src
        state.lyric = lyric
        document.title = `${songInfo.name}--${songInfo.artistName}--🎸云音乐`
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
        if (val) {
          state.id = val as string
        }
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
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: rgb(22, 22, 22);
    opacity: 0.9;
    z-index: 2;
    transform: scale(1.2);
  }
}

.song-content {
  z-index: 10;
  width: 100%;
  height: 100%;
  padding-top: 20px;
}
.info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .meta {
    text-align: center;
    margin-top: 30px;
    p {
      &:first-child {
        color: hsla(0, 0%, 100%, 0.9);
        margin-bottom: 10px;
        font-size: 14px;
      }
      &:last-child {
        color: hsla(0, 0%, 100%, 0.6);
        font-size: 10px;
      }
    }
  }
}

.lyric-wrap {
  width: 100%;
  height: 70vh;
}
#audio {
  display: none;
}
.body-box {
  padding-bottom: 10px;
}
.progress-box {
  position: absolute;
  bottom: 80px;
  width: 100%;
  padding: 0 20px;
}
</style>
