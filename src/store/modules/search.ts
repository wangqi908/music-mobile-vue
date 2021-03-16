import { Module, ActionContext } from 'vuex'
import { RootState, SearchState, SearchActionType } from '@/store/interface'
import { searchModule } from '@/store/actionTypes'
import { searchHotReq } from '@/api'

const state: SearchState = {
  searchValue: '',
  actionType: '',
  hotKeywords: []
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
  }
}
const actions = {
  async [searchModule.GET_HOT_KEYWORDS_ASYNC] ({
    commit
  }: ActionContext<SearchState, RootState>) {
    const res = await searchHotReq()
    console.log(res.data)
    // commit([searchModule.])
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
} as Module<SearchState, RootState>
