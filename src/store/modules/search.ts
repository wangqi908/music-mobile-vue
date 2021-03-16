import { Module, ActionContext } from 'vuex'
import {
  RootState,
  SearchState,
  SearchActionType,
  HotKeywords
} from '@/store/interface'
import { searchModule } from '@/store/actionTypes'
import { searchHotReq } from '@/api'

const state: SearchState = {
  searchValue: '',
  actionType: '',
  hotKeywords: {
    loading: false,
    err: null,
    list: []
  }
}
const mutations = {
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
const actions = {
  async [searchModule.GET_HOT_KEYWORDS_ASYNC] ({
    commit,
    state
  }: ActionContext<SearchState, RootState>) {
    if (state.hotKeywords.list.length !== 0) return
    const hotKeywords = {
      loading: true,
      list: []
    }
    commit(searchModule.SET_HOT_KEYWORDS, hotKeywords)
    try {
      const res = await searchHotReq()
      const hots = res.data.result?.hots || []
      const list = hots.map((item: { first: string }) => item.first)
      const hotKeywords = {
        loading: false,
        list
      }
      commit(searchModule.SET_HOT_KEYWORDS, hotKeywords)
    } catch (err) {
      const hotKeywords = {
        loading: false,
        err,
        list: []
      }
      commit(searchModule.SET_HOT_KEYWORDS, hotKeywords)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
} as Module<SearchState, RootState>
