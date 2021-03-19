<template>
  <div class="comment-comp">
    <h2 class="title">精彩评论</h2>
    <CommentItem v-for="item in info.list" :key="item.id" :info="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CommentItem } from '@/components'
export default defineComponent({
  components: { CommentItem },
  props: {
    info: Object
  },
  setup () {
    return {}
  }
})
</script>

<style scoped lang="less">
.comment-comp {
  .title {
    color: #333;
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 6px;
  }
}
</style>
