<template>
  <div class="input-wrap">
    <span class="iconfont icon-search search-icon"></span>
    <input
      type="text"
      :value="inputValue"
      @input="valueChange"
      @compositionstart="handleCompositionStart"
      @compositionend="handleCompositionEnd"
      class="input"
    />
    <label class="holder" v-if="!isInputting">搜索歌曲、歌手、专辑</label>
    <div class="clean" v-if="isInputting" @click="cleanValue">
      <span class="iconfont icon-guanbi1"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useStore } from 'vuex'
import useSetInputValue from './hooks/useHandleInputValue'

export default defineComponent({
  setup () {
    const store = useStore()

    const {
      inputValue,
      isInputting,
      valueChange,
      handleCompositionStart,
      handleCompositionEnd
    } = useSetInputValue()

    function cleanValue () {
      inputValue.value = ''
      isInputting.value = false
    }

    watch(inputValue, value => {
      store.commit('search/changeSearch', value)
    })

    return {
      isInputting,
      inputValue,
      valueChange,
      handleCompositionStart,
      handleCompositionEnd,
      cleanValue
    }
  }
})
</script>

<style scoped lang="less">
.input-wrap {
  position: relative;
  width: 100%;
  height: 30px;
  padding: 0 30px;
  box-sizing: border-box;
  background: #ebecec;
  border-radius: 30px;
  .input {
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    line-height: 18px;
    background: rgba(0, 0, 0, 0);
    font-size: 14px;
    color: #333;
    border-radius: 0;
    border: 0;
    outline: none;
    border: none;
  }
  .holder {
    position: absolute;
    left: 34px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #c9c9c9;
    background: rgba(0, 0, 0, 0);
    pointer-events: none;
  }
  .iconfont {
    color: #c9c9c9;
  }
  .clean {
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    line-height: 28px;
    text-align: center;
  }
  .search-icon {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 8px;
    vertical-align: middle;
  }
}
</style>
