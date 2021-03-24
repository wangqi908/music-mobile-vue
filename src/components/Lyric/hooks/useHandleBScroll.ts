import { watch, ComputedRef, onMounted, reactive, toRefs } from 'vue'

import BScroll from '@better-scroll/core'
import { LyricListItem } from '../interface'

export const handleBScroll = (
  wrapperHeight: ComputedRef<number>,
  contentHeight: ComputedRef<number>,
  audioDom: HTMLMediaElement | null,
  lyricListDom: HTMLElement[],
  lyricList: LyricListItem[]
) => {
  const state = reactive({
    activeIndex: 0,
    scrolling: false
  })

  let bs = (null as unknown) as BScroll

  function initBScroll () {
    bs = new BScroll('.wrapper', {
      probeType: 3,
      dblclick: true,
      click: true
    })

    bs.on('scroll', () => {
      state.scrolling = true
    })
    bs.on('scrollEnd', () => {
      state.scrolling = false
    })
  }

  function getActiveIndex (timeStamp: number) {
    return lyricList.findIndex((item, index) => {
      return item.ms < timeStamp && lyricList[index + 1]
        ? lyricList[index + 1].ms > timeStamp
        : true
    })
  }

  function setActiveIndex () {
    if (audioDom !== null) {
      audioDom.addEventListener('timeupdate', (event: Event) => {
        const target = event.target as HTMLMediaElement
        const timeStamp = target.currentTime * 1000
        state.activeIndex = getActiveIndex(timeStamp)
      })
    }
  }

  // 歌词滚动
  watch(
    () => state.activeIndex,
    activeIndex => {
      if (wrapperHeight.value && contentHeight.value) {
        if (state.scrolling) return

        const halfWrapperHeight = wrapperHeight.value / 2
        let distance = 0
        lyricListDom.forEach((item, index) => {
          if (index <= activeIndex) {
            distance += item.offsetHeight
          }
        })
        const isScroll = distance >= halfWrapperHeight
        distance =
          contentHeight.value - distance >= halfWrapperHeight
            ? distance
            : contentHeight.value - halfWrapperHeight
        if (isScroll) {
          bs.scrollTo(0, -distance + halfWrapperHeight, 500)
        } else {
          bs.scrollTo(0, 0, 500)
        }
      }
    }
  )

  onMounted(() => {
    initBScroll()
    setActiveIndex()
    if (audioDom) {
      // 初始化显示歌词位置
      state.activeIndex = getActiveIndex(audioDom.currentTime * 1000)
    }
  })

  return {
    ...toRefs(state)
  }
}
