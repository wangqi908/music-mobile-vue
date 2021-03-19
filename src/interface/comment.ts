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

export interface CommentListInterface {
  id: number;
  avatarUrl: string;
  userName: string;
  content: string;
  likedCount: number;
  time: number;
  beReplied: BeReplied[];
}
