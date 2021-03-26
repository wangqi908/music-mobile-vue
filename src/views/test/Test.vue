<template>
  <div>
    {{ isModalVisible }}
    <button @click="show">aa</button>
    <!-- <Message v-model:visible="isModalVisible" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue'
// import Message from './Message.vue'

export default defineComponent({
  // components: { Message },

  setup () {
    const instance = getCurrentInstance()
    const isModalVisible = ref(true)
    function show () {
      isModalVisible.value = !isModalVisible.value
      if (instance && instance.proxy) {
        instance.proxy.$hello.sayHello('aa')
      }
    }

    return {
      isModalVisible,
      show
    }
  }
})
</script>

<style scoped></style>
