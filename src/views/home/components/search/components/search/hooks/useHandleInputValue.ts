import { ref } from 'vue'
import store from '@/store'

export default () => {
  const isInputtingZh = ref(false)
  function valueChange (event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    if (isInputtingZh.value) return
    store.commit('search/changeSearch', value)
  }
  function handleCompositionStart () {
    isInputtingZh.value = true
  }
  function handleCompositionEnd (event: Event) {
    isInputtingZh.value = false
    valueChange(event)
  }
  function cleanValue () {
    store.commit('search/changeSearch', '')
    store.commit('search/changeActionType', '')
  }
  function handleFocus () {
    store.commit('search/changeActionType', 'SUGGEST')
  }
  function submit (event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    store.commit('search/changeSearch', value)
    store.commit('search/changeActionType', 'SONG_LIST')
  }

  return {
    valueChange,
    submit,
    handleFocus,
    handleCompositionStart,
    handleCompositionEnd,
    cleanValue
  }
}
