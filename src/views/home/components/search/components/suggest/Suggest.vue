<template>
  <div v-if="searchValue">
    <div class="tip">正在搜索"{{ searchValue }}"</div>
    <div v-if="!loading">
      <p v-for="(item, index) in list" :key="item + index">
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
    async function getInfo (value: string) {
      if (value === '') return

      state.loading = true
      try {
        const { list } = await useAsyncState(value)
        console.log(list)
        state.list = list
        state.loading = false
      } catch (error) {
        state.loading = false
      }
    }

    watch(searchValue, debounce(getInfo, 250))

    return { searchValue, ...toRefs(state) }
  }
})
</script>

<style scoped></style>
