import { App } from 'vue'

export interface HelloModule {
  sayHello: (name: string) => string;
}

export default {
  install: (app: App) => {
    const helloModule: HelloModule = {
      sayHello: (name: string) => {
        console.log(name)
        return `Hello ${name}`
      }
    }

    app.config.globalProperties.$hello = helloModule
  }
}
