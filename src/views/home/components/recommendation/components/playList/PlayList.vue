<template>
  <div v-if="!loading" class="play-list">
    <div
      v-for="item in list"
      :key="item.id"
      @click="checkList(item.id)"
      class="item"
    >
      <div class="img-box">
        <img :src="item.picUrl" :alt="item.name" class="img" />
      </div>
      <p class="ellipsis-text-line-2 name">
        {{ item.name }}
      </p>
    </div>
  </div>
  <Loading v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useAsyncState } from './hooks/useAsyncState'

export default defineComponent({
  async setup () {
    const router = useRouter()
    const { list, loading } = useAsyncState(6)

    function checkList (id: number) {
      router.push({ params: { id }, name: 'PlayList' })
    }

    return {
      list,
      loading,
      checkList
    }
  }
})
</script>

<style scoped lang="less">
.play-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;

  &::after {
    content: '';
    width: 33.33%;
  }
}
.item {
  // border: 1px solid #000;
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
