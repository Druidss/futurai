<!-- 评分系统组件，显示和更新评分系统中的不同维度的分数 
显示 Rate Me System 中的不同维度（如 Consumption Behavior、Health、Social Activities、Political Involvement）的当前分数。
提供分数的动态更新功能。-->

<template>
  <div>
    <h2>Rate Me System</h2>
    <div v-for="dimension in dimensions" :key="dimension.id">
      <h3>{{ dimension.name }}</h3>
      <p>Score: {{ dimension.score }}</p>
      <button @click="incrementScore(dimension.id)">+</button>
      <button @click="decrementScore(dimension.id)">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dimensions: [
        { id: 1, name: 'Dimension 1', score: 0 },
        { id: 2, name: 'Dimension 2', score: 0 },
        { id: 3, name: 'Dimension 3', score: 0 },
      ],
    };
  },
  methods: {
    incrementScore(dimensionId) {
      const dimension = this.dimensions.find(d => d.id === dimensionId);
      if (dimension) {
        dimension.score++;
      }
    },
    decrementScore(dimensionId) {
      const dimension = this.dimensions.find(d => d.id === dimensionId);
      if (dimension && dimension.score > 0) {
        dimension.score--;
      }
    },
  },
};
</script>