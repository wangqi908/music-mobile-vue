import { App } from 'vue'
const f = {
  uppercase (val: string) {
    return val.toUpperCase()
  }
}
export const addGlobalFilters = (app: App) => {
  app.config.globalProperties.$filters = f
}
