import { Component, App } from 'vue'
import MySuspense from './MySuspense.vue'
import Loading from './Loading.vue'

export { default as SongItem } from './SongList/SongItem.vue'

interface Components {
  MySuspense: Component;
  Loading: Component;
}
export const components: Components = {
  MySuspense,
  Loading
}

/**
 * 注册全局组件
 * @param app App
 */
export const addGlobalComponents = (app: App) => {
  const componentList = Object.keys(components) as Array<
    keyof typeof components
  >
  componentList.forEach(key => {
    app.component(key, components[key])
  })
}
