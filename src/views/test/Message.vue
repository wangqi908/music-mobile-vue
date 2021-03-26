<template>
  <teleport to="body">
    <transition name="msg" mode="out-in">
      <div class="message-mask" v-if="visible" @click.self="close">
        <div class="content">
          <div>aa</div>
          <button @click="close">close</button>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { emit }) {
    function close () {
      emit('update:visible', false)
    }
    return { close }
  }
})
</script>

<style lang="less">
.message-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
}

.content {
  position: absolute;
  top: 100px;
  border: 1px solid #000;
  background-color: #fff;
  padding: 30px;
}

.msg-enter-active,
.msg-leave-active {
  transition: opacity 0.2s ease;
}

.msg-enter-from,
.msg-leave-to {
  opacity: 0;
}

.msg-enter-active {
  .content {
    animation: bounce-in 0.2s;
  }
}
.msg-leave-active {
  .content {
    animation: bounce-in 0.2s reverse;
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
