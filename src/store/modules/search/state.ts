import { SearchState } from './types'
export default {
  searchValue: '',
  actionType: '',
  hotKeywords: {
    loading: false,
    err: null,
    list: []
  }
} as SearchState
