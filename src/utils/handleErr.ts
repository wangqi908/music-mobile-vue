import { errImg } from '@/assets/img/base64'
export const handleImgErr = () => {
  window.addEventListener(
    'error',
    e => {
      const dom = e.target as HTMLElement
      if (dom && dom.tagName.toUpperCase() === 'IMG') {
        ;(dom as HTMLImageElement).src = errImg
      }
    },
    true
  )
}
