import { ActionContext } from 'vuex'
import { StateType } from '@/store/types'
import { searchHotReq } from '@/api'
import { searchModule, SearchState } from './types'

export default {
  async [searchModule.GET_HOT_KEYWORDS_ASYNC] ({
    commit,
    state
  }: ActionContext<SearchState, StateType>) {
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
