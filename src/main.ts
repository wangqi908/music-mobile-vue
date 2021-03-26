import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './assets/style/normalize.less'
import './assets/style/transition.less'
import './assets/iconfont/iconfont.css'
import { addGlobalComponents } from '@/components'
import { addGlobalFilters } from '@/filters'
import Loading from '@/plugins/message'
export interface HelloModule {
  sayHello: (name: string) => string;
}
declare module '@vue/runtime-core' {
  // Bind to `this` keyword
  interface ComponentCustomProperties {
    $hello: HelloModule;
  }
}

const app = createApp(App)
app
  .use(store, key)
  .use(router)
  .use(Loading)
  .mount('#app')
addGlobalComponents(app)
addGlobalFilters(app)
