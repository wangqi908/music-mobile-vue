import { onMounted, reactive, toRefs, Ref, watch } from 'vue'

import BScroll from '@better-scroll/core'

interface Bs {
  x: number;
  y: number;
}

export default (wrapper: Ref<HTMLElement | null>) => {
  const state = reactive({
    scrollValue: 0,
    active: 0,
    heightArr: [] as number[]
  })
  const itemRefs: HTMLElement[] = []
  const setItemRef = (el: HTMLElement) => {
    if (el && itemRefs.indexOf(el) === -1) {
      itemRefs.push(el)
    }
  }

  let bs = (null as unknown) as BScroll

  function moveTo (index: number) {
    state.active = index

    bs.scrollTo(0, -state.heightArr[index], 300)
  }

  onMounted(() => {
    const heightArr: number[] = [0]

    watch(wrapper, () => {
      if (wrapper !== null) {
        bs = new BScroll('.wrapper', {
          probeType: 3,
          click: true
        })

        bs.on('scroll', (pos: Bs) => {
          const scrollValue = pos.y
          state.scrollValue = scrollValue

          let index =
            heightArr.findIndex(item => {
              return item > -scrollValue
            }) - 1
          index = index < 0 ? 0 : index
          state.active = index
        })

        let res: number = itemRefs.reduce((prev, cur) => {
          res = prev + cur.offsetHeight
          heightArr.push(res)
          return res
        }, 0)

        state.heightArr = heightArr
      }
    })
  })

  return {
    setItemRef,
    moveTo,
    ...toRefs(state)
  }
}
