<template>
  <div :class="['roll', isPlaying ? 'running' : 'paused']">
    <img :src="picUrl" class="pic" />
    <div class="light">
      <img src="./img/disc_light.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { SongInfo } from '@/interface/song'

export default defineComponent({
  props: {
    info: {
      type: Object as PropType<SongInfo>,
      required: true
    },
    isPlaying: {
      type: Boolean,
      required: true
    }
  },
  setup (props) {
    const picUrl = computed(() => {
      return (
        props.info.picUrl + '?imageView&thumbnail=360y360&quality=75&tostatic=0'
      )
    })
    return {
      picUrl
    }
  }
})
</script>

<style lang="less">
.roll {
  width: 250px;
  height: 250px;
  position: relative;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(0deg);
  animation: rotate 20s infinite linear;
  &::before {
    content: ' ';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background: url(./img/turn.png) no-repeat;
    background-size: contain;
    width: 250px;
    height: 250px;
  }
  .pic {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
  .light {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
    height: 250px;
    z-index: 10;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.paused {
  animation-play-state: paused;
}
.running {
  animation-play-state: running;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
