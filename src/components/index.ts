import { Component, App } from 'vue'
import MySuspense from './MySuspense.vue'

interface Components {
  MySuspense: Component;
}
export const components: Components = {
  MySuspense
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
