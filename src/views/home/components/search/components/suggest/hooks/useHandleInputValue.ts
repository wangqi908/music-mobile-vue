import { ref } from 'vue'
import { debounce } from '@/utils'
export default (defaultValue = '', debounceTime = 300) => {
  const inputValue = ref(defaultValue)
  const inputValueDebounce = ref(defaultValue)
  const isInputtingZh = ref(false)
  function handleCompositionStart () {
    isInputtingZh.value = true
  }
  function handleCompositionEnd () {
    isInputtingZh.value = false
  }
  function setInputValue (event: Event) {
    const target = event.target as HTMLInputElement
    inputValue.value = target.value
  }
  function setInputValueDebounce (event: Event) {
    const target = event.target as HTMLInputElement
    if (isInputtingZh.value) return
    inputValueDebounce.value = target.value
  }
  const setInputValueDebounceFn = debounce(setInputValueDebounce, debounceTime)

  function valueChange (e: Event) {
    setInputValueDebounceFn(e)
    setInputValue(e)
  }
  return {
    inputValue,
    inputValueDebounce,
    valueChange,
    handleCompositionStart,
    handleCompositionEnd
  }
}
