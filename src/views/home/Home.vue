<template>
  <div>
    <div class="nav-wrap">
      <Tab @navIdChange="navIdChange" />
    </div>
    <div class="content">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="componentList[navId]"></component>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRaw, reactive, toRefs, onMounted } from 'vue'
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
      navId: 0
    })
    const componentList = toRaw([Recommendation, Hot, Search])
    function navIdChange (id: number) {
      state.navId = id
    }

    onMounted(() => {
      document.title = '🎸云音乐'
    })

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
