<template>
  <div>
    <button @click="show">aa</button>
    {{ isShow }}
    <Child v-if="isShow" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Child from './Child.vue'

export default defineComponent({
  components: { Child },
  setup () {
    const isShow = ref(false)
    function show () {
      isShow.value = !isShow.value
    }
    return {
      isShow,
      show
    }
  }
})
</script>

<style scoped></style>
