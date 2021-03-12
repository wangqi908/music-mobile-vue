<template>
  <p>{{ name }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  async setup () {
    const state = reactive({
      name: ''
    })
    const req: Promise<string> = new Promise(resolve => {
      setTimeout(() => {
        resolve('zzz')
      }, 2000)
    })
    const testRes = await req

    state.name = testRes

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped></style>
