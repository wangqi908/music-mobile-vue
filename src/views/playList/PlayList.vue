<template>
  <SongList :id="id" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import SongList from '@/components/SongList/SongList.vue'

export default defineComponent({
  components: { SongList },
  setup () {
    const route = useRoute()
    const { id } = route.params
    return {
      id
    }
  }
})
</script>

<style scoped></style>
