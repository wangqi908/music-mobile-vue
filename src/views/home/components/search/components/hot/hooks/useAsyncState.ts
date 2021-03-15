import { reactive, onMounted, toRefs } from 'vue'
import { searchHotReq } from '@/api'
interface Item {
  first: string;
}

export function useAsyncState () {
  const state = reactive({
    list: null,
    loading: false
  })

  const run = async () => {
    state.loading = true
    try {
      const res = await searchHotReq()

      const hots = res.data.result?.hots || []
      const list = hots.map((item: Item) => item.first)
      state.list = list

      state.loading = false
    } catch (e) {
      state.loading = false
    }
  }

  onMounted(run)

  return {
    ...toRefs(state)
  }
}
