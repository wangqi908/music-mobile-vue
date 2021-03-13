<template>
  <div class="song-item" @click="checkSong">
    <div
      :class="['num', 'center', info.rank <= 3 ? 'hot' : '']"
      v-if="info.rank"
    >
      {{ info.rank }}
    </div>
    <div class="content">
      <div class="song-name ellipsis-text">
        {{ info.name }}
      </div>
      <div class="artist-name ellipsis-text">
        {{ info.artistName }}
      </div>
    </div>
    <div class="button center">
      X
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  props: {
    info: Object
  },
  setup (props) {
    const router = useRouter()

    function checkSong () {
      const id = props.info?.id
      router.push({ params: { id }, name: 'Song' })
    }

    return {
      checkSong
    }
  }
})
</script>

<style scoped lang="less">
.song-item {
  display: flex;
  border: 0 solid rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;
  width: 100%;
}
.num {
  display: flex;
  // width: 10%;
  flex: 1;
}
.content {
  flex: 8;
  padding: 6px 0;
  padding-left: 10px;
  overflow: hidden;
  .song-name {
    font-size: 17px;
  }
  .artist-name {
    font-size: 12px;
    color: #888;
  }
}
.button {
  flex: 1;
  // width: 10%;
}
.hot {
  color: @themeColor;
}
</style>
