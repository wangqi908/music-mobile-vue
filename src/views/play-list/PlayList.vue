<template>
  <div>
    PlayList
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup () {
    const route = useRoute()
    const { id } = route.params
    console.log(id, typeof id)
    return {}
  }
})
</script>

<style scoped></style>
