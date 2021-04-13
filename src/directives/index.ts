import { App } from 'vue'
import { errImg } from '@/assets/img/base64'

export const addGlobalDirectives = (app: App) => {
  app.directive('lazy', {
    beforeMount (el, binding) {
      const callback: IntersectionObserverCallback = entries => {
        entries.forEach(item => {
          // 出现到可视区
          if (item.intersectionRatio > 0) {
            const ele = item.target as HTMLImageElement
            ele.src = binding.value ? binding.value : errImg
          }
        })
      }
      // https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver
      const observer = new IntersectionObserver(callback)
      observer.observe(el)
    }
  })
}
