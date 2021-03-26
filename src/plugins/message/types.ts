import type { VNode } from 'vue'

export type MessageOptionsInter = {
  message?: string | VNode;
  btnValue?: string;
}

export type MessageParams = MessageOptionsInter | string

export type MessageVM = VNode

export type MessageItem = {
  vm: MessageVM
}
