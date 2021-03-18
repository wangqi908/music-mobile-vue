/*
  分析
  simiPlaylistReq
  simiSongReq
  commentMusicReq
*/
import { simiPlaylistReq, simiSongReq } from '@/api'

export default async (id: number) => {
  const resArr = await Promise.allSettled([
    simiPlaylistReq({ id }),
    simiSongReq({ id })
  ])
  let simiPlaylist = [] as unknown
  let simiSong = [] as unknown
  // resArr.forEach(res => {
  //   console.log(res)
  //   if(res[])

  //   // if
  // })
  if (resArr[0].status === 'fulfilled') {
    const res = resArr[0].value.data
    simiPlaylist = res.playlists
  } else {
    simiPlaylist = [false]
  }
  if (resArr[1].status === 'fulfilled') {
    const res = resArr[1].value.data
    simiSong = res.songs
  } else {
    simiSong = [false]
  }
  return { simiPlaylist, simiSong }
}
// export default async (id: number) => {
//     const simiPlaylistRes = await simiPlaylistReq({ id })
//     const simiSongRes = await simiSongReq({ id })
//     const simiPlaylist = simiPlaylistRes.data.playlists
//     const simiSong = simiSongRes.data.songs
//     return { simiPlaylist, simiSong }

// }
