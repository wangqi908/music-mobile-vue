<template>
  <div>
    {{ isModalVisible }}
    <button @click="show">show</button>
    <button @click="close">close</button>
    <!-- <Message v-model:visible="isModalVisible" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import Message from './Message.vue'
import Message from '@/plugins/message/message'

export default defineComponent({
  setup () {
    const isModalVisible = ref(true)
    function show () {
      isModalVisible.value = !isModalVisible.value
      Message('恭喜你，这是一条成功消息')
    }
    function close () {
      Message.close()
    }

    return {
      isModalVisible,
      close,
      show
    }
  }
})
</script>

<style scoped></style>
