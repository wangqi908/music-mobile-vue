import { createVNode, render, ComponentPublicInstance } from 'vue'
import MessageConstructor from './index.vue'
import type {
  MessageQueueItem,
  MessageOptionsInter,
  MessageParams
} from './types'

interface Test extends ComponentPublicInstance {
  visible: boolean;
}

let instance = {} as MessageQueueItem

export function close (): void {
  const proxy = instance?.vm?.component?.proxy
  if (proxy) {
    ;(proxy as Test).visible = false
  }
  console.log(instance)
}

const Message = function (opts: MessageParams = {} as MessageParams) {
  console.log(opts)
  if (typeof opts === 'string') {
    opts = {
      message: opts
    }
  }

  const options: MessageOptionsInter = opts as MessageOptionsInter

  const container = document.createElement('div')
  const vm = createVNode(MessageConstructor, options)

  if (vm.props) {
    vm.props.onDestroy = () => {
      render(null, container)
    }
  }
  close()
  instance = { vm }

  render(vm, container)
  if (container.firstElementChild) {
    document.body.appendChild(container.firstElementChild)
  }
}

Message.close = close
export default Message
