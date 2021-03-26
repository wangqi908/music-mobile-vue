import type { VNode } from 'vue'


export type MessageOptionsInter = {
  message?: string | VNode
}

export type MessageParams = MessageOptionsInter | string

export type MessageVM = VNode

type MessageQueueItem = {
  vm: MessageVM
}

export type MessageQueue = Array<MessageQueueItem>
