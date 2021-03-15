<template>
  <div v-if="searchValue">
    <div class="tip" @click="handleSearchValue(searchValue)">
      正在搜索"{{ searchValue }}"
    </div>
    <div v-if="!loading">
      <p
        v-for="(item, index) in list"
        :key="item + index"
        @click="handleSearchValue(item)"
      >
        {{ item }}
      </p>
    </div>
    <Loading v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useAsyncState } from './hooks/useAsyncState'
import { State } from './hooks/interface'
import { debounce } from '@/utils'

export default defineComponent({
  setup () {
    const state: State = reactive({
      list: [],
      loading: false
    })

    const store = useStore()
    const searchValue = computed(() => store.state.search.searchValue)
    const actionType = computed(() => store.state.search.actionType)
    async function getInfo (value: string) {
      if (value === '' || actionType.value !== 'SUGGEST') {
        state.list = []
        return
      }
      state.loading = true
      try {
        const { list } = await useAsyncState(value)
        state.list = list
        state.loading = false
      } catch (error) {
        state.loading = false
      }
    }

    function handleSearchValue (value: string) {
      store.commit('search/changeActionType', 'SEARCH')
      store.commit('search/changeSearch', value)
    }

    watch(searchValue, debounce(getInfo, 250))

    return {
      searchValue,
      handleSearchValue,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped></style>
