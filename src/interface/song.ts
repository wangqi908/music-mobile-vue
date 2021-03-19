export type TypeValve = 'SimilarPlaylist' | 'SimilarSong' | 'Comment'
export type TypeName = '相关歌单' | '相似歌曲' | '精彩评论'

export interface SongList {
  id: string;
  picUrl: string;
  name: string;
  song: SongItem;
  playCount?: number;
  creatorName?: string;
}

export interface SongItem {
  name: string;
  artists: { name: string }[];
}

export interface SongInfo {
  artistName: string;
  id: string;
  picUrl: string;
  name: string;
  rank?: number;
}

export interface Creator {
  nickname: string;
  avatarUrl: string;
  backgroundUrl: string;
  signature: string;
  id: number;
}

export interface SongListInfo {
  list: SongInfo[];
  updateTime: number;
  loading?: boolean;
  name: string;
  coverImgUrl: string;
  creator: Creator;
  err?: Error;
}
