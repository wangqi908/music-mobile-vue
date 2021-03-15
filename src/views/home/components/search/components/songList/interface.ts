export interface State {
  songList: Song[];
  [propName: string]: any;
}

export interface Song {
  name: string;
  id: number;
  artists: { name: string }[];
  album: { name: string };
}
