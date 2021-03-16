<template>
  <div>
    {{ hotKeywords }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { searchModule } from '@/store/actionTypes'

export default defineComponent({
  setup () {
    const store = useStore()
    store.dispatch(searchModule.MODULE + searchModule.GET_HOT_KEYWORDS_ASYNC)
    const hotKeywords = computed(() => store.state.searchModule.hotKeywords)
    return {
      hotKeywords
    }
  }
})
</script>

<style scoped></style>
