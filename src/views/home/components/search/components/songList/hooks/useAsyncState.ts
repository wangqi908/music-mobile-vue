import { searchReq } from '@/api'
import { Song } from '../interface'
import { setStorage } from '@/utils'

export const getInfo = async (keywords: string, offset = 1, limit = 30) => {
  setStorage('hot', keywords)
  const params = {
    keywords,
    limit,
    offset,
    type: 1,
    timestamp: Date.now()
  }

  const res = await searchReq(params)
  const resData = res.data.result
  const songs = resData.songs || []
  const songCount = resData.songCount
  const list: Song[] = songs.map((item: Song) => {
    const artistNames = item.ar.map(artist => artist.name)
    const artistName = artistNames.join('/')
    const id = item.id
    const name = item.name
    const albumName = item.al.name
    const copyright = item.privilege.cp !== 0 // 版权

    return {
      artistName,
      id,
      name,
      albumName,
      copyright
    }
  })

  return {
    list,
    songCount
  }
}
