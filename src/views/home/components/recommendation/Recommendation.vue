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

    <Test>
      <PlayList />
    </Test>
    <Test>
      <SongList />
    </Test>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PlayList, SongList } from './components'
import Test from '@/components/Test.vue'
export default defineComponent({
  components: {
    Test,
    PlayList,
    SongList
  },
  setup () {
    return {}
  }
})
</script>

<style scoped></style>
