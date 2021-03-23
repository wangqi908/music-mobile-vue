<template>
  <div class="test">
    test
    <div class="wrapper">
      <ul class="content">
        <li v-for="(item, index) in lyricList" :key="item.time + index">
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import BScroll from '@better-scroll/core'
import { toFixedNum } from '@/utils'

interface LyricListItem {
  text: string;
  time: number;
}
export default defineComponent({
  setup () {
    const state = reactive({
      lyricList: [] as LyricListItem[]
    })
    const lyric = require('./lyric.json').lrc.lyric.split(/[\n]/g)
    lyric.pop()
    function timeToSecond (val: string) {
      const [minuteStr, secondStr] = val.split(':')
      return toFixedNum(Number(minuteStr) * 60 + Number(secondStr), 2)
    }

    const lyricList: LyricListItem[] = lyric.map((item: string) => {
      const reg = /\[([^)]*)\]/
      const timeArr = item.match(reg)
      const text = item.replace(reg, '').trim()
      let time = 0
      if (timeArr !== null && text !== '') {
        time = timeToSecond(timeArr[1])
      }
      return {
        text,
        time
      }
    })

    state.lyricList = lyricList

    onMounted(() => {
      new BScroll('.wrapper', {
        probeType: 3,
        click: true
      })
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped lang="less">
.test {
  height: 100%;
  .wrapper {
    height: 200px;
    border: 1px solid #000;
  }
  .content {
    border: 1px solid rgb(202, 89, 89);
  }
}
</style>
