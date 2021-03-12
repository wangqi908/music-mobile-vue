<template>
  <nav class="tab">
    <a
      v-for="item in list"
      :key="item.id"
      class="item"
      @click="navClick(item.id)"
    >
      <div :class="['tabtxt', activeId === item.id ? 'active' : '']">
        {{ item.name }}
      </div>
    </a>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup (props, { emit }) {
    const state = reactive({
      list: [
        {
          name: '推荐音乐',
          id: 0
        },
        {
          name: '热歌榜',
          id: 1
        },
        {
          name: '搜索',
          id: 2
        }
      ],
      activeId: 0
    })
    function navClick (id: number) {
      state.activeId = id
      emit('navIdChange', id)
    }

    return {
      ...toRefs(state),
      navClick
    }
  }
})
</script>

<style scoped lang="less">
.tab {
  display: flex;

  .item {
    flex: 1;
    text-align: center;
    cursor: pointer;
    display: block;
    width: 30%;
    height: 100%;
  }
  .tabtxt {
    display: inline-block;
    max-width: 100%;
    height: 100%;
    padding: 0 5px;
    font-size: 15px;
    line-height: 40px;
  }
  .active {
    border-bottom: 2px solid @themeColor;
  }
}
</style>
