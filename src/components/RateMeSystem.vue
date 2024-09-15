<!-- 评分系统组件，显示和更新评分系统中的不同维度的分数 
显示 Rate Me System 中的不同维度（如 Consumption Behavior、Health、Social Activities、Political Involvement）的当前分数。
提供分数的动态更新功能。-->

<template>
  <div>
    <h2>Rate Me System</h2>
    <div class="rateme-container">
      <p>Consumption Behavior: {{ rateMeStore.ConsumptionBehavior }}</p>
      <p>Health Level: {{ rateMeStore.HealthLevel }}</p>
      <p>Social Activities: {{ rateMeStore.SocialActivities }}</p>
      <p>Political Involvement: {{ rateMeStore.PoliticalInvolvement }}</p>
    </div>
  </div>
</template>

<script>
import { useRateMeStore } from './stores/RateMe'

export default {
  data() {
    return {
      dimensions: [
        { id: 1, name: 'Consumption Behavior', score: 0 },
        { id: 2, name: 'Health Level', score: 0 },
        { id: 3, name: 'Social Activities', score: 0 },
        { id: 4, name: 'Political Involvement', score: 0 },
      ],
    };
  },
  methods: {
  },
  setup() {
    const rateMeStore = useRateMeStore()
    return {
      rateMeStore
    }
  }
};
</script>
<style>
.rateme-container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  color:antiquewhite
}
.rateme-score{
  margin-left: 10px;
  font-size: 20px;
}
</style>