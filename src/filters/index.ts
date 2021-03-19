import { App } from 'vue'
import { formatTime } from '@/utils'
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
  }
}
export const addGlobalFilters = (app: App) => {
  app.config.globalProperties.$filters = filter
}
