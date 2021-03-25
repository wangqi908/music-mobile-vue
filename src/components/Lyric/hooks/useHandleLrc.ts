import { toFixedNum } from '@/utils'
import { LyricListItem } from '../interface'

// 转成毫秒
function timeToMS (val: string) {
  const [minuteStr, secondStr] = val.split(':')
  return toFixedNum(Number(minuteStr) * 60 * 1000 + Number(secondStr) * 1000, 2)
}

export const handleLrc = (lrc: string) => {
  const arr = lrc.split('\n')
  const reg = /\[([^)]*)\]/
  const lyricList: LyricListItem[] = []
  arr.forEach((item: string) => {
    const timeArr = item.match(reg)
    const content = item.replace(reg, '').trim()

    let ms = 0
    if (timeArr !== null && content !== '') {
      if (!timeArr[1].includes('[')) {
        ms = timeToMS(timeArr[1])
      }
      lyricList.push({
        content,
        time: timeArr[1],
        ms
      })
    }
  })
  return lyricList
}
