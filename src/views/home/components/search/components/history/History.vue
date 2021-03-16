<template>
  <ul v-for="item in list" :key="item.id">
    <li class="item">
      <span class="iconfont icon-search search"></span>
      <span @click="search(item.value)" class="name">{{ item.value }}</span>
      <div class="clear" @click="clear(item.id)">
        <span class="iconfont icon-guanbi1"></span>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { getStorage, removeStorage } from '@/utils'

export default defineComponent({
  setup () {
    const store = useStore()
    const list = ref([])

    function getValue () {
      const hotList = getStorage('hot')
      list.value = hotList ? hotList.reverse() : []
    }

    function clear (id: number) {
      removeStorage('hot', id)
      getValue()
    }

    function search (value: string) {
      store.commit('search/changeSearch', value)
      store.commit('search/changeActionType', 'SONG_LIST')
    }

    onMounted(() => {
      getValue()
    })

    return {
      clear,
      list,
      search
    }
  }
})
</script>

<style scoped lang="less">
.item {
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-size: 13px;
  border-bottom: 1px solid #ccc;
  .search {
    width: 20px;
    margin-right: 10px;
  }
  .iconfont {
    color: #ccc;
  }
  .clear {
    padding: 8px 0;
    text-align: center;
    width: 40px;
  }
  .name {
    flex: 9;
    width: 100%;
  }
}
</style>
