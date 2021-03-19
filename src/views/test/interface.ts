export type Type = 'SimilarPlaylist' | 'SimilarSong' | 'Comment'

export interface Info {
  type: Type;
  status: boolean;
}

export interface PlaylistItem {
  id: number;
  playCount: number;
  name: string;
  coverImgUrl: string;
  creator: { name: string };
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
}
export interface SongList {
  artistName: string;
  id: number;
  albumName: string;
  picUrl: string;
  name: string;
}

export interface User {
  userId: number;
  avatarUrl: string;
  nickname: string;
}

export interface CommentItem {
  commentId: number;
  content: string;
  likedCount: number;
  time: number;
  user: User;
  beReplied: {
    beRepliedCommentId: number;
    content: string;
    user: User;
  }[];
}

export interface BeReplied {
  beRepliedCommentId: number;
  content: string;
  userName: string;
}

export interface CommentList {
  id: number;
  avatarUrl: string;
  userName: string;
  content: string;
  likedCount: number;
  time: number;
  beReplied: BeReplied[];
}

export interface PlaylistInfo extends Info {
  list: PlaylistList[];
}
export interface SimiSongInfo extends Info {
  list: SongList[];
}
export interface CommentInfo extends Info {
  list: CommentList[];
}
