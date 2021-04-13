<template>
  <div @click="checkList(info.id)" class="item">
    <div class="img-box">
      <!-- <img :src="info.coverImgUrl" :alt="info.name" class="img" /> -->
      <img v-lazy="info.coverImgUrl" :alt="info.name" class="img" />
    </div>
    <p
      :class="[
        showCreatorName ? 'ellipsis-text' : 'ellipsis-text-line-2',
        'name'
      ]"
    >
      {{ info.name }}
    </p>
    <p class="ellipsis-text creatorName">
      {{ info.creatorName }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { PlaylistItemInterface } from '@/interface/playlist'

export default defineComponent({
  props: {
    info: {
      type: Object as PropType<PlaylistItemInterface>,
      required: true
    },
    showCreatorName: {
      type: Boolean,
      required: false
    }
  },
  setup () {
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
  width: 100%;
  .img-box {
    .img {
      width: 100%;
    }
  }
  .name {
    font-size: 13px;
  }
  .creatorName {
    font-size: 11px;
    color: #999;
  }
}
</style>
