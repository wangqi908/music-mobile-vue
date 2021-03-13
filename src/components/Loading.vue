<template>
  <div class="loading-component-box">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style lang="less">
.loading-component-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 40px;
  span {
    display: inline-block;
    width: 4px;
    border-radius: 4px;
    background: lightgreen;
    animation: load-keyframes 1s ease infinite;
    margin: 0 2px;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }
  span:nth-child(4) {
    animation-delay: 0.6s;
  }
  span:nth-child(5) {
    animation-delay: 0.8s;
  }
}
@keyframes load-keyframes {
  0%,
  100% {
    height: 20px;
    background: lightgreen;
  }
  50% {
    height: 30px;

    background: lightblue;
  }
}
</style>
