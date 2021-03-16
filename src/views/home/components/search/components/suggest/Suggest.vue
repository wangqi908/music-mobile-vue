<template>
  <div v-if="searchValue" class="suggest-component">
    <div class="tip" @click="handleSearchValue(searchValue)">
      正在搜索"{{ searchValue }}"
    </div>
    <ul v-if="!loading" class="suggest-box">
      <li
        v-for="(item, index) in list"
        :key="item + index"
        @click="handleSearchValue(item)"
        class="suggest-item"
      >
        <span class="iconfont icon-search"></span>
        <span>{{ item }}</span>
      </li>
    </ul>
    <Loading v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, reactive, toRefs } from 'vue'
import { useStore } from '@/store'
import { useAsyncState } from './hooks/useAsyncState'
import { searchModule } from '@/store/actionTypes'
import { State } from './hooks/interface'
import { debounce } from '@/utils'

export default defineComponent({
  setup () {
    const state: State = reactive({
      list: [],
      loading: false
    })

    const store = useStore()
    const searchValue = computed(() => store.state.searchModule.searchValue)
    const actionType = computed(() => store.state.searchModule.actionType)
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
      store.commit(searchModule.MODULE + searchModule.CHANGE_SEARCH, value)
      store.commit(
        searchModule.MODULE + searchModule.CHANGE_ACTION_TYPE,
        'SONG_LIST'
      )
    }

    if (searchValue.value !== '') {
      getInfo(searchValue.value)
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

<style scoped lang="less">
.suggest-component {
  font-size: 14px;
  padding: 0 10px;
}
.tip {
  color: #507daf;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.suggest-item {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  .icon-search {
    color: #ccc;
    margin-right: 10px;
  }
}
</style>
