<template>
  <div class="player">
    <div class="head">
      <span class="time">{{ $filters.formatSToMS(songCurrentTime) }}</span>
      <div class="btn" @click="togglePlay">
        <span class="iconfont icon-icon-16" v-if="isPlaying"></span>
        <span class="iconfont icon-icon-11" v-else></span>
      </div>
      <span class="time">{{ $filters.formatSToMS(songDuration) }}</span>
    </div>
    <div class="progress-box" ref="progressDom" @click="changeProgress">
      <div class="inner" :style="innerStyle"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, onMounted, watch } from 'vue'
import { toFixedNum } from '@/utils'
import { uesHandleDom } from './hooks/uesHandleDom'
import { useHandlePlayer } from './hooks/useHandlePlayer'

export default defineComponent({
  emit: ['changeMediaCurrent', 'onTogglePlay'],
  props: {
    audioDom: {
      type: Object as PropType<HTMLMediaElement>,
      required: true
    }
  },
  setup (props, { emit }) {
    const percent = ref(0)
    const songCurrentTime = ref(0)

    const {
      progressDom,
      progressWidth,
      innerStyle,
      songDuration
    } = uesHandleDom(percent, props.audioDom)

    function changeProgress (event: MouseEvent) {
      const { offsetX } = event
      percent.value = toFixedNum(offsetX / progressWidth.value, 2)
      emit(
        'changeMediaCurrent',
        toFixedNum(songDuration.value * percent.value, 2)
      )
    }

    const { isPlaying, togglePlay } = useHandlePlayer(props.audioDom)

    onMounted(() => {
      props.audioDom.addEventListener('timeupdate', () => {
        songCurrentTime.value = props.audioDom.currentTime
        // 进度条跟着歌曲时间改变
        percent.value = toFixedNum(
          props.audioDom.currentTime / songDuration.value,
          2
        )
      })
    })

    watch(isPlaying, () => {
      emit('onTogglePlay', isPlaying.value)
    })

    return {
      progressDom,
      changeProgress,
      innerStyle,
      songDuration,
      songCurrentTime,
      isPlaying,
      togglePlay
    }
  }
})
</script>

<style scoped lang="less">
.player {
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .time {
      color: rgb(104, 104, 104);
      font-size: 12px;
      text-align: center;
    }
    .btn {
      width: 60px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      .iconfont {
        font-size: 20px;
      }
    }
  }
  .progress-box {
    height: 6px;
    // background-color: hsla(0, 0%, 83%, 0.9);
    background-color: rgb(179, 179, 179);
    border-radius: 20px;
    overflow: hidden;
    .inner {
      height: 100%;
      background-color: rgb(88, 88, 88);
      // background-color: hsla(0, 0%, 26%, 0.9);
    }
  }
}
</style>
