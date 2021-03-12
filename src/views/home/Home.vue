<template>
  <Tab @navIdChange="navIdChange" />

  <keep-alive>
    <component :is="componentList[navId]"></component>
  </keep-alive>
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
      navId: 0
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

<style scoped lang="less"></style>
