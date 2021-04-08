/*
  分析
  simiPlaylistReq
  simiSongReq
  commentMusicReq
*/
import { simiPlaylistReq, simiSongReq, commentMusicReq } from '@/api'
import {
  PlaylistItem,
  SongItem,
  SimiSongInfo,
  PlaylistInfo,
  CommentInfo
} from '../interface'
import { TypeValve } from '@/interface/song'
import { CommentItem, BeReplied } from '@/interface/comment'

function handleSimilarPlaylistData (songs: PlaylistItem[]) {
  const list = songs.map(item => {
    const coverImgUrl = item.coverImgUrl
    const name = item.name
    const creatorName = item.creator.nickname
    const playCount = item.playCount
    const id = item.id
    return {
      id,
      coverImgUrl,
      playCount,
      creatorName,
      name
    }
  })
  const info = {
    type: 'SimilarPlaylist' as TypeValve,
    list,
    status: true
  }
  return info
}

function handleSimilarSongData (songs: SongItem[]) {
  const list = songs.map(item => {
    const artistNames = item.artists.map(artist => artist.name)
    const picUrl = item.album.picUrl
    const albumName = item.album.name
    const name = item.name
    const id = item.id
    const copyright = item.privilege.cp !== 0 // 版权
    const artistName = artistNames.join('/')
    return {
      artistName,
      id,
      picUrl,
      albumName,
      name,
      copyright
    }
  })
  const info = {
    type: 'SimilarSong' as TypeValve,
    list,
    status: true
  }
  return info
}

function handleCommentData (comments: CommentItem[]) {
  const list = comments.map(item => {
    const id = item.commentId
    const avatarUrl = item.user.avatarUrl
    const userName = item.user.nickname
    const content = item.content
    const likedCount = item.likedCount
    const time = item.time
    const beRepliedArr = item.beReplied
    let beReplied = [] as BeReplied[]
    if (beRepliedArr && beRepliedArr.length !== 0) {
      beReplied = [
        {
          beRepliedCommentId: beRepliedArr[0].beRepliedCommentId,
          content: beRepliedArr[0].content,
          userName: beRepliedArr[0].user.nickname
        }
      ]
    } else {
      beReplied = []
    }

    return {
      id,
      avatarUrl,
      userName,
      content,
      likedCount,
      time,
      beReplied
    }
  })
  const info = {
    type: 'Comment' as TypeValve,
    list,
    status: true
  }
  return info
}
export default async (id: number) => {
  const resArr = await Promise.allSettled([
    simiPlaylistReq({ id }),
    simiSongReq({ id }),
    commentMusicReq({ id })
  ])
  let simiPlaylist = {} as PlaylistInfo
  let simiSong = {} as SimiSongInfo
  let comment = {} as CommentInfo

  if (resArr[0].status === 'fulfilled' && resArr[0].value.data.code === 200) {
    const res = resArr[0].value.data
    simiPlaylist = handleSimilarPlaylistData(res.playlists)
  } else {
    simiPlaylist = { status: false, type: 'SimilarPlaylist', list: [] }
  }
  if (resArr[1].status === 'fulfilled' && resArr[1].value.data.code === 200) {
    const res = resArr[1].value.data
    simiSong = handleSimilarSongData(res.songs)
  } else {
    simiSong = { status: false, type: 'SimilarSong', list: [] }
  }
  if (resArr[2].status === 'fulfilled' && resArr[2].value.data.code === 200) {
    const res = resArr[2].value.data
    comment = handleCommentData(res.hotComments)
  } else {
    comment = { status: false, type: 'Comment', list: [] }
  }
  return { simiPlaylist, simiSong, comment }
}
