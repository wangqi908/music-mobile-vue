<template>
  <div>
    <!-- <MySuspense>
      <PlayList />
    </MySuspense> -->
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
    // eslint-disable-next-line vue/no-unused-components
    PlayList,
    SongList
  },
  setup () {
    return {}
  }
})
</script>

<style scoped></style>
