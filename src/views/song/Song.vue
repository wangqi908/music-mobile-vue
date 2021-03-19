<template>
  <div class="song">
    <div v-if="!loading">
      {{ name }}
    </div>
    <Loading v-else />
    <SongRelate :id="id" />
    {{ id }}
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAsyncState } from './hooks/useAsyncState'
import SongRelate from './components/SongRelate/SongRelate.vue'

export default defineComponent({
  components: { SongRelate },
  setup () {
    const route = useRoute()
    const id = route.params.id as string
    const { name, loading } = useAsyncState(id)

    watch(
      () => route.params.id,
      val => {
        console.log(val)
      }
    )

    return {
      name,
      loading,
      id: Number(id)
    }
  }
})
</script>

<style scoped>
.song {
  height: 100%;
  background-color: rgba(54, 47, 47, 4);
}
</style>
