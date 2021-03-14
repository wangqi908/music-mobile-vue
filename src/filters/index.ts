import { App } from 'vue'
import { formatTime } from '@/utils'
const filter = {
  formatTimeAll (timestamp: number) {
    return formatTime(timestamp, 'all')
  },
  formatTimeYMD (timestamp: number) {
    return formatTime(timestamp, 'ymd')
  },
  formatTimeDMS (timestamp: number) {
    return formatTime(timestamp, 'dms')
  }
}
export const addGlobalFilters = (app: App) => {
  app.config.globalProperties.$filters = filter
}
