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
}
