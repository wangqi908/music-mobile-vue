const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}
type TimeType = 'all' | 'ymd' | 'dms' | 'obj'
/**
 * 时间戳格式化
 * @param timestamp
 * @param type
 */
export const formatTime = (timestamp: number, type: TimeType = 'obj') => {
  const date = new Date(timestamp)
  const year = formatNumber(date.getFullYear())
  const month = formatNumber(date.getMonth() + 1)
  const day = formatNumber(date.getDate())
  const hour = formatNumber(date.getHours())
  const minute = formatNumber(date.getMinutes())
  const second = formatNumber(date.getSeconds())

  switch (type) {
    case 'all':
      return `${year}/${month}/${day} ${hour}:${minute}:${second}`
    case 'ymd':
      return `${year}/${month}/${day}`
    case 'dms':
      return `${hour}:${minute}:${second}`
    case 'obj':
      return {
        year,
        month,
        day,
        hour,
        minute,
        second
      }
  }
}

/**
 * 防抖
 * @param fn
 * @param wait
 */
export const debounce = <T>(fn: T, wait = 300) => {
  let timer: number
  return <U>(event: U) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      if (typeof fn === 'function') {
        fn(event)
      }
    }, wait)
  }
}

export const getStorage = (key: string) => {
  const result = localStorage.getItem(key)
  return result ? JSON.parse(result) : null
}

export const setStorage = <T>(key: string, value: T) => {
  interface Item {
    id: number;
    value: T;
  }

  const result: Item[] = getStorage(key)

  if (!result) {
    const obj = {
      value,
      id: 0
    }
    localStorage.setItem(key, JSON.stringify([obj]))
  } else {
    const hasValue = result.some(
      item => JSON.stringify(item.value) === JSON.stringify(value)
    )
    if (hasValue) return
    const lastItem = result[result.length - 1]
    const id = lastItem ? lastItem.id + 1 : 0
    const obj = {
      value,
      id
    }
    const arr = [...result, obj]
    localStorage.setItem(key, JSON.stringify(arr))
  }
}

export const removeStorage = (key?: string, id?: number) => {
  if (key) {
    if (id === undefined) {
      localStorage.removeItem(key)
    } else {
      const result = getStorage(key)
      if (result) {
        const newList = result.filter((item: { id: number }) => item.id !== id)
        localStorage.setItem(key, JSON.stringify(newList))
      }
    }
  } else {
    localStorage.clear()
  }
}

/**
 * 保留小数
 * @param num number
 * @param lang number
 * @returns number
 */
export const toFixedNum = (num: number, lang = 0) => {
  return Number(num.toFixed(lang))
}

/**
 * 秒转 分:秒
 * @param second number
 * @returns string
 */
export const sToMS = (second: number) => {
  let minute = 0 // 分
  minute = Math.floor(second / 60)
  second = Math.floor(second % 60)
  const minuteStr = minute < 10 ? '0' + minute : minute
  const secondStr = second < 10 ? '0' + second : second
  return minuteStr + ':' + secondStr
}
