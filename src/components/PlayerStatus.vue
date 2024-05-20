<!-- 玩家状态组件，显示玩家的步数、收集到的关键卡数量和 Rate Me System 的当前数值
显示玩家的当前步数。
显示玩家收集到的关键卡数量。
提供玩家剩余步数的动态更新。 -->

<template>
  <div>
    <p>Steps: {{ steps }}</p>
    <p>Key Card Count: {{ keyCardCount }}</p>
    <p>Rate Me System Value: {{ rateMeValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: 0,
      keyCardCount: 0,
      rateMeValue: 0
    };
  }
};
</script>