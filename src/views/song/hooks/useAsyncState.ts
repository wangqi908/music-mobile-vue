import { songDetailReq, lyricReq } from '@/api'
import { SongInfo } from '@/interface/song'

interface SongDetail {
  id: number;
  name: string;
  al: SongInfo;
  ar: { name: string }[];
}

export default async (id: string) => {
  const songDetailRes = await songDetailReq({ ids: id })
  const songList: SongDetail[] = songDetailRes.data.songs
  const songInfo = songList.map(item => {
    const artistNames = item.ar.map(artist => artist.name)
    const artistName = artistNames.join('/')
    const id = item.id
    const picUrl = item.al.picUrl
    const name = item.al.name
    return {
      artistName,
      id,
      picUrl,
      name
    }
  })[0]

  const lyricRes = await lyricReq({ id: Number(id) })
  const lyric: string = lyricRes.data.lrc?.lyric || ''
  return { songInfo, lyric }
}
