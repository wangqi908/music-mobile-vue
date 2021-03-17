<template>
  <div>
    <Popup>
      <template #tab>
        <ul class="tab-box">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </template>
      <template #content>
        <div class="content-box">
          aaaa
        </div>
      </template>
    </Popup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Popup from './Popup.vue'

export default defineComponent({
  components: { Popup },
  setup () {
    return {}
  }
})
</script>

<style scoped lang="less">
.test {
  border: 1px solid #000;
}
.tab-box {
  display: flex;
  justify-content: space-between;
  li {
    text-align: center;
    border: 1px solid #000;
    flex: 1;
  }
}
.content-box {
  border: 1px solid #000;
  height: 100%;
}
</style>
