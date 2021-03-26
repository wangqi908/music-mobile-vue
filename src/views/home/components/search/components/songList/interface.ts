export interface State {
  songList: Song[];
  [propName: string]: any;
}

export interface Song {
  name: string;
  id: number;
  copyrightId: number;
  artists: { name: string }[];
  album: { name: string };
}
