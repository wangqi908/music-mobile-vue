import { reactive, onMounted, toRefs } from 'vue'
import { personalizedReq } from '@/api'

interface Item {
  id: number;
  name: string;
  creatorName?: string;
  picUrl: string;
  playCount: number;
}

export function useAsyncState (limit = 30) {
  const state = reactive({
    list: [],
    loading: false
  })

  const run = async () => {
    state.loading = true
    try {
      const res = await personalizedReq({ limit })
      const resData = res.data
      const list = resData.result.map((item: Item) => {
        return {
          id: item.id,
          name: item.name,
          coverImgUrl: item.picUrl,
          playCount: item.playCount
        }
      })
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
