import { songDetailReq, songUrlReq, lyricReq } from '@/api'
export default async (id: string) => {
  const songDetailRes = await songDetailReq({ ids: id })
  const songDetailData = songDetailRes.data

  const songUrlRes = await songUrlReq({ id: Number(id) })
  const src: string = songUrlRes.data.data[0].url

  const lyricRes = await lyricReq({ id: Number(id) })
  const lyric: string = lyricRes.data.lrc.lyric

  return { songDetailData, src, lyric }
}
