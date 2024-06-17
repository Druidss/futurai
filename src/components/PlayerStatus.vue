<!-- 玩家状态组件，显示玩家的步数、收集到的关键卡数量和 Rate Me System 的当前数值
显示玩家的当前步数。
显示玩家收集到的关键卡数量。
提供玩家剩余步数的动态更新。 -->

<script setup>
import { usePlayStatusStore } from '../stores/playStatus'

const playStatusStore = usePlayStatusStore()

// whenever the player makes a choice, call the addEvent action
playStatusStore.addEvent({ /* event data */ })
</script>

<template>
  <div>
    <p>Steps: {{ steps }}</p>
    <p>Key Card Count: {{ keyCardCount }}</p>
    <p>Rate Me System Value: {{ rateMeValue }}</p>
    <p>Saved Events: {{ savedEvents }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: 0,
      keyCardCount: 0,
      rateMeValue: 0,
      savedEvents: [] // var to save all the events that player has saved
    };
  }
};
</script>