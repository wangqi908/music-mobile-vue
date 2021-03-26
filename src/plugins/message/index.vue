<template>
  <transition name="fade" appear @after-leave="$emit('destroy')">
    <div v-show="visible" class="msg">
      {{ msg }}
      {{ visible }}
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import type { MessageVM } from './types'
export default defineComponent({
  props: {
    message: {
      type: [String, Object] as PropType<string | MessageVM>,
      default: ''
    }
  },
  setup (props) {
    const msg = ref(props.message)
    const visible = ref(true)
    return { msg, visible }
  }
})
</script>

<style scoped>
.msg {
  position: fixed;
  top: 100px;
  left: 50%;
}
</style>
