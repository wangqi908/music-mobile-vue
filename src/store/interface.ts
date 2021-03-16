export interface RootState {}

export type SearchActionType = '' | 'SONG_LIST' | 'SUGGEST'
export interface SearchState {
  searchValue: string;
  actionType: SearchActionType;
  hotKeywords: string[];
}

export interface AllState extends RootState {
  searchModule: SearchState;
}
