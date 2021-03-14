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
