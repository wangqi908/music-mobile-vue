<template>
  <div v-if="searchValue">
    <div class="tip">正在搜索"{{ searchValue }}"</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { debounce } from '@/utils'

export default defineComponent({
  setup () {
    const store = useStore()
    const searchValue = computed(() => store.state.search.searchValue)
    function getInfo (value: string) {
      if (value === '') return
      console.log('发请求', value)
    }

    watch(searchValue, debounce(getInfo, 250))

    return { searchValue }
  }
})
</script>

<style scoped></style>
