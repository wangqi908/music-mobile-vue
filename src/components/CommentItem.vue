<template>
  <div class="comment-box">
    <div class="avatar">
      <img :src="avatarUrl" class="avatar-img" />
    </div>
    <div class="content">
      <div class="content-head">
        <div class="meta">
          <div class="name">{{ info.userName }}</div>
          <div class="time">{{ $filters.formatTimeAll(info.time) }}</div>
        </div>
        <div class="like">
          <span>{{ info.likedCount }}</span>
          <span class="iconfont icon-icon-3"></span>
        </div>
      </div>
      <div class="content-body">
        <span v-if="info.beReplied && info.beReplied.length !== 0">
          <span>回复</span>
          <span class="at">@{{ info.beReplied[0].userName }}</span>
          <span>：</span>
        </span>
        <span>{{ info.content }}</span>
      </div>
      <div class="replied" v-if="info.beReplied && info.beReplied.length !== 0">
        <span class="at">@{{ info.beReplied[0].userName }}</span>
        <span>：</span>
        <span>{{ info.beReplied[0].content }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { CommentListInterface } from '@/interface/comment'

export default defineComponent({
  props: {
    info: {
      type: Object as PropType<CommentListInterface>,
      required: true
    }
  },
  setup (props) {
    const avatarUrl = computed(() => props.info.avatarUrl)
    return {
      avatarUrl
    }
  }
})
</script>

<style scoped lang="less">
.comment-box {
  display: flex;
  padding: 10px 0;
  .avatar {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 10px;
    .avatar-img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    flex: 1;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .content-head {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .meta {
    display: flex;
    flex-direction: column;
    .name {
      font-size: 14px;
      color: #666;
    }
    .time {
      font-size: 9px;
      color: #999;
    }
  }
  .like {
    font-size: 11px;
    color: #999;
  }
  .content-body {
    color: #333;
    font-size: 15px;
    line-height: 22px;
    padding-top: 10px;
    .at {
      color: #507daf;
      text-decoration: none;
    }
  }
  .replied {
    margin-top: 10px;
    padding: 10px;
    color: #888;
    font-size: 14px;
    line-height: 21px;
    border: 1px solid #ccc;
  }
}
</style>
