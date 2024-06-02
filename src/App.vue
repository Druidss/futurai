<!-- 初始化游戏数据，控制全局状态。
渲染 Map、PlayerStatus 和 RateMeSystem 组件 -->

<script setup>
import Map from './components/Map.vue'; // Import the Map component 
</script>

<template>
  <div id="app">
    <Map />
  </div>
</template>

<style scoped>
#app {
  font-family: avenir, helvetica, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
