<template>
  <div>
    {{ isModalVisible }}
    <button @click="show">show</button>
    <button @click="show1">show1</button>
    <button @click="show2">show2</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Message } from '@/plugins'

export default defineComponent({
  setup () {
    const isModalVisible = ref(true)
    function show () {
      isModalVisible.value = !isModalVisible.value
      Message('由于版权保护，您所在的地区暂时无法使用')
    }
    function show1 () {
      isModalVisible.value = !isModalVisible.value
      Message({
        message: 'haode',
        btnValue: 'ok'
      })
    }
    function show2 () {
      isModalVisible.value = !isModalVisible.value
      Message('show2')
    }

    return {
      isModalVisible,
      close,
      show1,
      show2,
      show
    }
  }
})
</script>

<style scoped></style>
