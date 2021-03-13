<template>
  <div>
    <MySuspense>
      <PlayList />
    </MySuspense>
    <hr />
    <MySuspense>
      <SongList />
    </MySuspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PlayList, SongList } from './components'
export default defineComponent({
  components: {
    PlayList,
    SongList
  },
  setup () {
    return {}
  }
})
</script>

<style scoped></style>
