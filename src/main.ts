import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './assets/style/normalize.less'
import './assets/iconfont/iconfont.css'
import { addGlobalComponents } from '@/components'
import { addGlobalFilters } from '@/filters'

const app = createApp(App)

app
  .use(store, key)
  .use(router)
  .mount('#app')
addGlobalComponents(app)
addGlobalFilters(app)
