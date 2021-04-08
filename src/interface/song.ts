export type TypeValve = 'SimilarPlaylist' | 'SimilarSong' | 'Comment'
export type TypeName = '相关歌单' | '相似歌曲' | '精彩评论'

export interface SongList {
  id: string;
  picUrl: string;
  name: string;
  song: SongItem;
  playCount?: number;
  creatorName?: string;
  privilege: {
    cp: number;
  };
}

export interface SongItem {
  name: string;
  artists: { name: string }[];
  privilege: {
    cp: number;
  };
}

export interface SongInfo {
  artistName?: string;
  id: string;
  picUrl: string;
  name: string;
  rank?: number;
  copyright?: boolean;
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
