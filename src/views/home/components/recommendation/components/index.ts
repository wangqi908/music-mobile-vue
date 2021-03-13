import { defineAsyncComponent } from 'vue'

export const PlayList = defineAsyncComponent(() =>
  import('./playList/PlayList.vue')
)
export const SongList = defineAsyncComponent(() =>
  import('./songList/SongList.vue')
)
