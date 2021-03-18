<template>
  <div>
    <h2>Comment</h2>
    <li v-for="item in info.list" :key="item.id" class="item">
      {{ item.name }}
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    info: Object
  },
  setup () {
    return {}
  }
})
</script>

<style scoped></style>
