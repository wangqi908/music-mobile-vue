import { ref } from 'vue'
// import { debounce } from '@/utils'
export default (defaultValue = '') => {
  const inputValue = ref(defaultValue)
  const isInputtingZh = ref(false)
  function valueChange (event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    if (isInputtingZh.value) return
    inputValue.value = value
  }
  function handleCompositionStart () {
    isInputtingZh.value = true
  }
  function handleCompositionEnd (event: Event) {
    isInputtingZh.value = false
    valueChange(event)
  }

  return {
    inputValue,
    valueChange,
    handleCompositionStart,
    handleCompositionEnd
  }
}
