import { reactive, onMounted, toRefs } from 'vue'
import { personalizedNewSongReq } from '@/api'
import { SongList, SongInfo } from '@/interface/song'
interface State {
  loading: boolean;
  list?: SongInfo[] | null;
}

export function useAsyncState () {
  const state: State = reactive({
    list: null,
    loading: false
  })

  const run = async () => {
    state.loading = true
    try {
      const res = await personalizedNewSongReq({})
      const resData: SongList[] = res.data.result
      const info = resData.map(item => {
        const artistNames = item.song.artists.map(artist => artist.name)
        const artistName = artistNames.join('/')
        const id = item.id
        const picUrl = item.picUrl
        const name = item.name
        const copyright = item.song.privilege.cp !== 0 // 版权
        return {
          artistName,
          id,
          picUrl,
          name,
          copyright
        }
      })
      state.list = info

      state.loading = false
    } catch (e) {
      state.loading = false
    }
  }

  onMounted(run)

  return {
    ...toRefs(state)
  }
}
