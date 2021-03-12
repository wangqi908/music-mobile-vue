<template>
  <div v-if="!err">
    {{ name }}
  </div>
  <div v-else>
    err
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  async setup () {
    const state = reactive({
      name: '',
      err: false
    })
    const req: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('SongList Error'))
        // resolve('SongList')
      }, 2000)
    })

    try {
      const testRes = await req
      state.name = testRes
    } catch (error) {
      state.err = true
    }

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped></style>
