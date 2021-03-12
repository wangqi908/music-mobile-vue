import { defineAsyncComponent } from 'vue'

export const PlayList = defineAsyncComponent(() => import('./PlayList.vue'))
export const SongList = defineAsyncComponent(() => import('./SongList.vue'))
