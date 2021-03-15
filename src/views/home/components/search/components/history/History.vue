<template>
  <div>
    <div v-for="item in list" :key="item.id">
      {{ item.value }}--{{ item.id }}
      <button @click="clear(item.id)">clear</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { getStorage, removeStorage } from '@/utils'

export default defineComponent({
  setup () {
    const searchValue = ref('')
    const list = ref([])

    function getValue () {
      const hotList = getStorage('hot')
      console.log(hotList)
      list.value = hotList || []
    }

    function clear (id: number) {
      removeStorage('hot', id)
      getValue()
    }

    onMounted(() => {
      getValue()
    })
    return {
      clear,
      list,
      searchValue
    }
  }
})
</script>

<style scoped></style>
