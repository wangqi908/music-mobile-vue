<template>
  <div>
    <audio
      controls
      preload
      autoplay
      src="https://music.163.com/song/media/outer/url?id=77470.mp3"
      ref="audioDom"
    ></audio>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style scoped></style>
