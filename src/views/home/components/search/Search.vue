<template>
  <div>
    <div class="search-box">
      <SearchInput />
    </div>
    <Suggest v-if="actionType === 'SUGGEST'" />
    {{ actionType }}
  </div>
</template>

<script lang="ts">
/*
 分析:
  模块:搜索框/热门搜索/搜索建议列表/搜索记录列表
    搜索框:
      输入文字,显示'搜索建议列表组件'
      点击x清除输入框value,'搜索建议列表组件'/'搜索记录列表'隐藏
      文字输入完成需要调用'搜索建议'接口,显示'搜索建议列表组件'
      确认 进行搜索 加载SongItem组件
      向下滚动,加载更多
      匹配搜索值高亮
      监听input事件需要防抖
    热门搜索:
      点击热门搜索关键词触发搜索框搜索
    搜索建议列表:
      点击触发搜索框搜索
    搜索记录列表:
      记录确认搜索的关键词,可删除
 */
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { SearchInput, Suggest } from './components'
export default defineComponent({
  components: { SearchInput, Suggest },
  setup () {
    const store = useStore()
    const actionType = computed(() => store.state.search.actionType)
    return {
      actionType
    }
  }
})
</script>

<style scoped lang="less">
.search-box {
  padding: 15px 10px;
  border-bottom: 1px solid #ccc;
}
</style>
