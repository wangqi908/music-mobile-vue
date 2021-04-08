export interface State {
  songList: Song[];
  [propName: string]: any;
}

export interface Song {
  name: string;
  id: number;
  copyrightId: number;
  ar: { name: string }[];
  al: { name: string };
  privilege: {
    cp: number;
  };
}
