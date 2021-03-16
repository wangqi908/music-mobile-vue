export interface RootState {}

export type SearchActionType = '' | 'SONG_LIST' | 'SUGGEST'
export interface HotKeywords {
  loading: boolean;
  list: string[];
  err?: any;
}
export interface SearchState {
  searchValue: string;
  actionType: SearchActionType;
  hotKeywords: HotKeywords;
}

export interface AllState extends RootState {
  searchModule: SearchState;
}
