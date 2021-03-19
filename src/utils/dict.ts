import { TypeValve, TypeName } from '@/interface/song'
interface SongRelate {
  id: number;
  valve: TypeValve;
  name: TypeName;
}
export const songRelateList: SongRelate[] = [
  {
    id: 0,
    valve: 'SimilarPlaylist',
    name: '相关歌单'
  },
  {
    id: 1,
    valve: 'SimilarSong',
    name: '相似歌曲'
  },
  {
    id: 2,
    valve: 'Comment',
    name: '精彩评论'
  }
]
