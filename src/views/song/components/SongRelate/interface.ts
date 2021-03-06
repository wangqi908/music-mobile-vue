import { CommentListInterface } from '@/interface/comment'
import { TypeValve } from '@/interface/song'

export interface Info {
  type: TypeValve;
  status: boolean;
}

export interface PlaylistItem {
  id: number;
  playCount: number;
  name: string;
  coverImgUrl: string;
  creator: { nickname: string };
}

export interface PlaylistList {
  id: number;
  playCount: number;
  coverImgUrl: string;
  creatorName: string;
  name: string;
}

export interface SongItem {
  id: number;
  name: string;
  album: { name: string; picUrl: string };
  artists: { name: string }[];
  privilege: { cp: number };
}
export interface SongList {
  artistName: string;
  id: number;
  albumName: string;
  picUrl: string;
  name: string;
}

export interface PlaylistInfo extends Info {
  list: PlaylistList[];
}
export interface SimiSongInfo extends Info {
  list: SongList[];
}
export interface CommentInfo extends Info {
  list: CommentListInterface[];
}

export interface PopupStatus {
  isOpen: boolean;
  isDragging: boolean;
}

export interface PopupStyleInterface {
  bottom: number;
  height: number;
  backgroundOpacity: number;
  transition: string;
}

export interface PopupStateInterface {
  isOpen: boolean;
  isDragging: boolean;
  pageY: number;
  oldBottom: number;
  distance: number;
  style: PopupStyleInterface;
}
