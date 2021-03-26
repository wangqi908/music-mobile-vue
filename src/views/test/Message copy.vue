<template>
  <teleport to="body">
    <transition name="fade" mode="out-in">
      <div class="message-wrap" v-if="visible">
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
    console.log(props.visible)
    function close () {
      emit('update:visible', false)
    }
    return { close }
  }
})
</script>

<style scoped lang="less">
.message-wrap {
  border: 1px solid #000;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  .content {
    top: 100px;
    background-color: #fff;
    border: 1px solid #000;
    top: 100px;
    position: absolute;
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  80% {
    transform: scale(1.2);
    opacity: 0.8;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.content {
  .msg-enter-active {
    animation: bounce-in 10s;
  }
  .msg-leave-active {
    animation: bounce-in 10s reverse;
  }
}

.msg-enter-active,
.msg-leave-active {
  transition: opacity 10s ease;
}

.msg-enter-from,
.msg-leave-to {
  opacity: 0;
}
</style>
