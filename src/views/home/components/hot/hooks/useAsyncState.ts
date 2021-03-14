import { reactive, onMounted, toRefs } from 'vue'
import { playlistDetailReq } from '@/api'
import { Artists, SongInfo } from '@/interface/song'
interface Item {
  id: number;
  al: SongInfo;
  ar: Artists[];
}

export function useAsyncState (id = 3778678) {
  const state = reactive({
    list: null,
    updateTime: '',
    loading: false
  })

  const run = async () => {
    state.loading = true
    try {
      const res = await playlistDetailReq({ id })

      const playlist = res.data.playlist
      const updateTime = playlist.updateTime
      const info = playlist.tracks.map((item: Item, index: number) => {
        const artistNames = item.ar.map(artist => artist.name)
        const artistName = artistNames.join('/')

        const rank = index + 1

        const id = item.id
        const picUrl = item.al.picUrl
        const name = item.al.name
        return {
          rank,
          artistName,
          id,
          picUrl,
          name
        }
      })
      state.list = info

      state.loading = false
      state.updateTime = updateTime
    } catch (e) {
      state.loading = false
    }
  }

  onMounted(run)

  return {
    ...toRefs(state)
  }
}
