import { playlistDetailReq } from '@/api'
import { Artists, SongInfo, SongListInfo, Creator } from '@/interface/song'
interface Item {
  id: number;
  al: SongInfo;
  ar: Artists[];
}

export async function useAsyncState (id = 3778678) {
  const state: SongListInfo = {
    list: [],
    updateTime: 0,
    coverImgUrl: '',
    name: '',
    creator: {} as Creator
  }

  const res = await playlistDetailReq({ id })

  const playlist = res.data.playlist
  const updateTime = playlist.updateTime
  const coverImgUrl = playlist.coverImgUrl
  const name = playlist.name

  const creator = {
    nickname: playlist.creator.nickname,
    avatarUrl: playlist.creator.avatarUrl,
    backgroundUrl: playlist.creator.backgroundUrl,
    signature: playlist.creator.signature,
    id: playlist.userId
  }
  const list: SongInfo[] = playlist.tracks.map((item: Item, index: number) => {
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
  state.list = list
  state.coverImgUrl = coverImgUrl
  state.creator = creator
  state.name = name
  state.updateTime = updateTime

  return state
}
