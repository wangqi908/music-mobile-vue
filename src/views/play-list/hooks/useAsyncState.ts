import { reactive, onMounted, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { playlistDetailReq } from '@/api'
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
      const res = await playlistDetailReq({ id: id as string })
      const resData = res.data
      console.log(resData)
      state.name = resData.playlist.name
      state.loading = false
    } catch (e) {
      console.error(e)
      state.loading = false
    }
  }

  onMounted(run)

  return {
    ...toRefs(state)
  }
}
