<template>
  <div class="similar-song">
    <h2 class="title">喜欢这首歌的人也听</h2>
    <SongItem v-for="item in info.list" :key="item.id" :info="item" showPic />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SongItem } from '@/components'

export default defineComponent({
  components: { SongItem },
  props: {
    info: Object
  }
})
</script>

<style scoped lang="less">
.similar-song {
  .title {
    color: #333;
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 6px;
  }
}
</style>
