import { reactive, onMounted, toRefs } from 'vue'
import { personalizedReq } from '@/api'
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
      state.list = resData.result
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
