export interface SongList {
  id: string;
  picUrl: string;
  name: string;
  song: SongItem;
}

export interface SongItem {
  name: string;
  artists: Artists[];
}

export interface Artists {
  name: string;
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
