<template>
  <div class="song">
    <div v-if="!loading">
      <div class="name">
        <p>{{ name }}</p>
        <p>{{ id }}</p>
      </div>
    </div>
    <Loading v-else />
    <SongRelate :id="id" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import useAsyncState from './hooks/useAsyncState'
import SongRelate from './components/SongRelate/SongRelate.vue'

export default defineComponent({
  components: { SongRelate },
  setup () {
    const route = useRoute()
    const state = reactive({
      id: route.params.id as string,
      name: '',
      loading: false
    })

    async function getInfo () {
      state.loading = true
      try {
        const { resData } = await useAsyncState(state.id)
        console.log(resData)
        state.name = resData.songs[0].name
        state.loading = false
      } catch (error) {
        state.loading = false
        console.log(error)
      }
    }

    onMounted(() => {
      getInfo()
    })

    watch(
      () => route.params.id,
      val => {
        console.log(val)
        state.id = val as string
        getInfo()
      }
    )

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
.song {
  height: 100%;
  background-color: rgba(54, 47, 47, 0.4);
  .name {
    background-color: #fff;
    padding: 20px;
  }
}
</style>
