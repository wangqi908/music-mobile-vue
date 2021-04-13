<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <img v-lazy="item.src" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup () {
    const state = reactive({
      list: [
        {
          id: 1,
          src:
            'http://file06.16sucai.com/2018/0423/43a7fbe301d6d3a4c1daadd46bda8996.jpg'
        },
        {
          id: 2,
          src: ''
        },
        {
          id: 3,
          src: 'http://file03.16sucai.com/2017/1100/16sucai_P591F3A175.JPG'
        },
        {
          id: 4,
          src:
            'http://file06.16sucai.com/2018/0423/18a5cf4ab618e6736806db42a7a6197b.jpg'
        },
        {
          id: 5,
          src:
            'http://file06.16sucai.com/2018/0423/7dcfc1aede6cd99b583f4149e3ad73ac.jpg'
        },
        {
          id: 6,
          src:
            'http://file06.16sucai.com/2018/0315/fa9f74d6296cd7a1ad9b79e480556c3f.jpg'
        },
        {
          id: 7,
          src:
            'http://file06.16sucai.com/2018/0315/8fc2da2c3f645e4afe992ac5c401f4f1.jpg'
        }
      ]
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>
li {
  height: 400px;
  border: 1px solid #000;
}
li img {
  width: 100%;
  height: auto;
}
</style>
