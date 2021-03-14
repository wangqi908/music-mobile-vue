<template>
  <div class="nav-wrap">
    <Tab @navIdChange="navIdChange" />
  </div>
  <div class="content">
    <keep-alive>
      <component :is="componentList[navId]"></component>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRaw, reactive, toRefs } from 'vue'
import { Tab, Recommendation, Hot, Search } from './components'

export default defineComponent({
  name: 'Home',
  components: {
    Tab,
    Recommendation,
    Hot,
    Search
  },

  setup () {
    const state = reactive({
      navId: 1
    })
    const componentList = toRaw([Recommendation, Hot, Search])
    function navIdChange (id: number) {
      state.navId = id
    }

    return {
      componentList,
      navIdChange,
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
.nav-wrap {
  position: fixed;
  width: 100%;
  z-index: 10;
}
.content {
  padding-top: 40px;
}
</style>
