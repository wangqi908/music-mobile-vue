<template>
  home
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { playlistHotReq } from '@/api'

export default defineComponent({
  name: 'Home',
  setup () {
    playlistHotReq().then(res => {
      console.log(res.data)
    })
  }
})
</script>
