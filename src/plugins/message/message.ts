import { createVNode, render, ComponentPublicInstance } from 'vue'
import MessageConstructor from './index.vue'
import type {
  MessageQueue,
  MessageOptionsInter,
  MessageParams
} from './types'

let instances: MessageQueue = []
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

  instances.push({ vm })
  render(vm, container)
  if (container.firstElementChild) {
    document.body.appendChild(container.firstElementChild)
  }
}

interface Test extends ComponentPublicInstance {
  visible: boolean;
}

export function close (): void {
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].vm.component
    if (instance && instance.proxy) {
      ;(instance.proxy as Test).visible = false
    }
  }
  instances = []
}

Message.close = close
export default Message
