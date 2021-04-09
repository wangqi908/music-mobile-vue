import { ref } from 'vue'
import { store } from '@/store'
import { searchModule } from '@/store/modules/search/types'

export default () => {
  const isInputtingZh = ref(false)
  function valueChange (event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    if (isInputtingZh.value || value === '') return
    store.commit(searchModule.MODULE + searchModule.CHANGE_SEARCH, value)
  }
  function handleCompositionStart () {
    isInputtingZh.value = true
  }
  function handleCompositionEnd (event: Event) {
    isInputtingZh.value = false
    valueChange(event)
  }
  function cleanValue () {
    store.commit(searchModule.MODULE + searchModule.CHANGE_SEARCH, '')
    store.commit(searchModule.MODULE + searchModule.CHANGE_ACTION_TYPE, '')
  }
  function handleFocus () {
    store.commit(
      searchModule.MODULE + searchModule.CHANGE_ACTION_TYPE,
      'SUGGEST'
    )
  }
  function submit (event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    if (value === '') return
    target.blur()

    store.commit(searchModule.MODULE + searchModule.CHANGE_SEARCH, value)
    store.commit(
      searchModule.MODULE + searchModule.CHANGE_ACTION_TYPE,
      'SONG_LIST'
    )
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
