import { reactive, onMounted, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { songDetailReq } from '@/api'
export function useAsyncState () {
  const route = useRoute()
  const { id } = route.params

  const state = reactive({
    name: '',
    loading: false
  })

  const run = async () => {
    state.loading = true
    try {
      const res = await songDetailReq({ ids: id as string })
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
