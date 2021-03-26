import { createApp } from 'vue'
import MessageComponent from '@/plugins/message/MessageComponent.vue'
const instance = createApp(MessageComponent).mount(
  document.createElement('div')
)
document.body.appendChild(instance.$el)
export default instance
