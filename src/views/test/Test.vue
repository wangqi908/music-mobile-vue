<template>
  <div class="test">
    test
    <SongRelate :id="77470" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SongRelate from './SongRelate.vue'

export default defineComponent({
  components: { SongRelate },
  setup () {
    return {}
  }
})
</script>

<style scoped lang="less">
.test {
  border: 1px solid #000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
