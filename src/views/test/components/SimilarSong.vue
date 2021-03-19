<template>
  <SongItem v-for="item in info.list" :key="item.id" :info="item" showPic />
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

<style scoped></style>
