import {
  searchModule,
  SearchState,
  SearchActionType,
  HotKeywords
} from './types'
export default {
  [searchModule.CHANGE_SEARCH] (state: SearchState, value: string) {
    state.searchValue = value
  },
  [searchModule.CHANGE_ACTION_TYPE] (
    state: SearchState,
    value: SearchActionType
  ) {
    state.actionType = value
  },
  [searchModule.SET_HOT_KEYWORDS] (state: SearchState, value: HotKeywords) {
    state.hotKeywords = value
  }
}
