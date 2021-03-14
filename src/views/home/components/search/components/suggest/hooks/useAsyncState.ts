import { searchSuggestReq } from '@/api'
import { Item, State } from './interface'

export async function useAsyncState (keywords: string) {
  const state: State = {
    list: []
  }

  const res = await searchSuggestReq({ keywords, type: 'mobile' })
  const matchList = res.data.result.allMatch || []
  const list: Item[] = matchList.map((item: Item) => item.keyword)
  state.list = list

  return {
    ...state
  }
}
