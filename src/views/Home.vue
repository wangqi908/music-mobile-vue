<template>
  <p>home</p>
  <div class="aa">
    sdfds
    <div class="ac">sss</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { playlistHotReq } from '@/api'
interface Person {
  name: string;
  age: number;
}
export default defineComponent({
  name: 'Home',
  setup () {
    playlistHotReq().then(res => {
      console.log(res.data)
    })
  }
})
</script>

<style scoped lang="less">
.aa {
  background-color: rgb(185, 38, 38);
  .ac {
    background-color: @bgc;
  }
}
</style>
