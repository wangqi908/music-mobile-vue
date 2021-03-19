<template>
  <div @click="checkList(info.id)" class="item">
    <div class="img-box">
      <img :src="info.picUrl" :alt="info.name" class="img" />
    </div>
    <p class="ellipsis-text-line-2 name">
      {{ info.name }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { PlaylistItem } from '@/interface/playlist'

export default defineComponent({
  props: {
    info: {
      type: Object as PropType<PlaylistItem>,
      required: true
    }
  },
  async setup () {
    const router = useRouter()

    function checkList (id: number) {
      router.push({ params: { id }, name: 'PlayList' })
    }

    return {
      checkList
    }
  }
})
</script>

<style scoped lang="less">
.item {
  padding: 2px;
  margin-bottom: 10px;
  width: 33.33%;
  .img-box {
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    font-size: 13px;
  }
}
</style>
