<template>
  <div class="search-hot" v-if="!loading">
    <h3 class="title">
      热门搜索
    </h3>
    <ul class="list">
      <li
        class="item"
        v-for="(item, index) in list"
        :key="index"
        @click="search(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
  <Loading v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'
import { searchModule } from '@/store/actionTypes'
import { useAsyncState } from './hooks/useAsyncState'

export default defineComponent({
  setup () {
    // todo 可以优化到vuex里防止重复调用
    const { loading, list } = useAsyncState()

    const store = useStore()

    function search (value: string) {
      store.commit(searchModule.MODULE + searchModule.CHANGE_SEARCH, value)
      store.commit(
        searchModule.MODULE + searchModule.CHANGE_ACTION_TYPE,
        'SONG_LIST'
      )
    }

    return { loading, list, search }
  }
})
</script>

<style scoped lang="less">
.search-hot {
  padding: 15px 10px 0;
  .title {
    font-size: 12px;
  }
  .list {
    margin: 10px 0 7px;
  }
  .item {
    display: inline-block;
    height: 32px;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 0 14px;
    font-size: 14px;
    line-height: 32px;
    border-color: #d3d4da;
    border-radius: 32px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
