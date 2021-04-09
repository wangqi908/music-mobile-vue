export const searchModule = {
  MODULE: 'searchModule/',
  CHANGE_SEARCH: 'changeSearch',
  CHANGE_ACTION_TYPE: 'changeActionType',
  SET_HOT_KEYWORDS: 'setHotKeywords',
  GET_HOT_KEYWORDS_ASYNC: 'getHotKeywordsAsync'
}

export type SearchActionType = '' | 'SONG_LIST' | 'SUGGEST'

export interface HotKeywords {
  loading: boolean;
  list: string[];
  err?: unknown;
}

export interface SearchState {
  searchValue: string;
  actionType: SearchActionType;
  hotKeywords: HotKeywords;
}
