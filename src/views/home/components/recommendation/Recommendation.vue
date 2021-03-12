<template>
  <div>
    <!-- <Suspense>
      <template #default>
        <PlayList />
      </template>
      <template #fallback>
        <div>正在拼了命的加载…</div>
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <SongList />
      </template>
      <template #fallback>
        <div>正在拼了命的加载…</div>
      </template>
    </Suspense> -->

    <MySuspense>
      <PlayList />
    </MySuspense>
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
