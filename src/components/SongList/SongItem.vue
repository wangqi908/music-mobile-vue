<template>
  <div
    class="song-item"
    :class="[info.copyright ? '' : 'no-copyright']"
    @click="checkSong"
  >
    <div
      :class="['num', 'center', info.rank <= 3 ? 'hot' : '']"
      v-if="info.rank"
    >
      {{ info.rank }}
    </div>
    <div class="pic" v-if="showPic">
      <!-- <img :src="pic" alt="" class="" /> -->
      <img v-lazy="pic" alt="" class="" />
    </div>
    <div class="content">
      <div class="song-name ellipsis-text">
        <span>{{ info.name }}</span>
      </div>
      <div class="artist-name ellipsis-text">
        <span>
          {{ info.artistName }}
        </span>
        <span v-if="showAlbum"> - {{ info.albumName }}</span>
      </div>
    </div>
    <div class="button center">
      <span class="iconfont icon-icon-11"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { SongInfo } from '@/interface/song'
import { Message } from '@/plugins'

export default defineComponent({
  props: {
    info: {
      type: Object as PropType<SongInfo>,
      required: true
    },
    showAlbum: {
      type: Boolean,
      default: false
    },
    showPic: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const router = useRouter()
    function checkSong () {
      const { info } = props
      if (!info.copyright) {
        Message('由于版权保护，您所在的地区暂时无法使用')
        return
      }
      const id = info.id
      router.push({ params: { id }, name: 'Song' })
    }

    const pic = computed(() => {
      return props.info.picUrl
    })

    return {
      checkSong,
      pic
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
  align-items: center;
}
.num {
  display: flex;
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
.pic {
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
}
.no-copyright {
  color: #ccc;
  .artist-name {
    color: #ccc;
  }
}
</style>
