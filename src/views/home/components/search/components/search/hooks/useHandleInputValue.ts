import { ref } from 'vue'
import store from '@/store'

export default (defaultValue = '') => {
  const inputValue = ref(defaultValue)
  const isInputtingZh = ref(false)
  function valueChange (event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    if (isInputtingZh.value) return
    inputValue.value = value
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
    inputValue.value = ''
    store.commit('search/changeSearch', '')
  }
  function handleFocus () {
    store.commit('search/changeActionType', 'SUGGEST')
  }

  return {
    valueChange,
    handleFocus,
    handleCompositionStart,
    handleCompositionEnd,
    cleanValue
  }
}
