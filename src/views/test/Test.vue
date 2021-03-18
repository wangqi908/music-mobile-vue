<template>
  <div>
    <Popup @getOpenStatus="getOpenStatus">
      <template #tab>
        <ul class="tab-box">
          <li
            v-for="(item, index) in resData"
            :key="index"
            @click="moveTo(index)"
            :class="{ active: active === index && isOpen }"
          >
            {{ item.type }}
          </li>
        </ul>
      </template>
      <template #content>
        <div class="content-box wrapper">
          <div class="content">
            <ul
              v-for="(section, index) in resData"
              :key="index"
              class="section-content"
              :ref="setItemRef"
            >
              <li v-for="item in section.list" :key="item.id" class="item">
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </template>
    </Popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Popup from './Popup.vue'
import uesHandleCardMove from './hooks/uesHandleCardMove'
interface ListItem {
  id: number;
  name: string;
}
interface ResDataItem {
  type: string;
  list: ListItem[];
}

export default defineComponent({
  components: { Popup },
  setup () {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const data = require('./json.json')

    const resData: ResDataItem[] = ref(data.data)
    const isOpen = ref(false)
    // const state = reactive({
    //   resData
    // })

    function getOpenStatus (val: boolean) {
      isOpen.value = val
    }

    const { setItemRef, moveTo, active } = uesHandleCardMove()

    return {
      resData,
      moveTo,
      active,
      setItemRef,
      getOpenStatus,
      isOpen
    }
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
    border: 1px solid #ccc;
    flex: 1;
  }
  .active {
    border-bottom: 2px solid #f00;
  }
}
.content-box {
  border: 1px solid #000;
  height: 100%;
  background-color: rgba(226, 226, 226, 0.2);
}
.section-content {
  border-bottom: 3px solid rgb(139, 214, 89);
  .item {
    border: 1px solid rgb(196, 81, 81);
    padding: 10px;
    margin-bottom: 20px;
  }
}
.wrapper {
  overflow: hidden;
}
</style>
