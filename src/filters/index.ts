import { App } from 'vue'
import { formatTime, sToMS } from '@/utils'
import { songRelateList } from '@/utils/dict'
import { TypeValve } from '@/interface/song'
const filter = {
  formatTimeAll (timestamp: number) {
    return formatTime(timestamp, 'all')
  },
  formatTimeYMD (timestamp: number) {
    return formatTime(timestamp, 'ymd')
  },
  formatTimeDMS (timestamp: number) {
    return formatTime(timestamp, 'dms')
  },
  formatSongRelateTitle (valve: TypeValve) {
    return songRelateList.find(item => item.valve === valve)?.name || ''
  },
  formatSToMS (second: number) {
    return sToMS(second)
  }
}
export const addGlobalFilters = (app: App) => {
  app.config.globalProperties.$filters = filter
}
