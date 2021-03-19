import { reactive, onMounted, toRefs } from 'vue'
import { songDetailReq } from '@/api'
export function useAsyncState (ids: string) {
  const state = reactive({
    name: '',
    loading: false
  })

  const run = async () => {
    state.loading = true
    try {
      const res = await songDetailReq({ ids })
      const resData = res.data
      state.name = resData.songs[0].name
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
