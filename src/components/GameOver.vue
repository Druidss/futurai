<!-- 游戏结束组件，当游戏结束时显示最终得分和报告 -->

<template>
  <div>
    <h1>Game Over</h1>
    <p>Final Score: {{ score }}</p>
    <p>Report: {{ report }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
      report: ""
    };
  },
  mounted() {
    // Fetch the final score and report from the server or calculate them based on game data
    this.score = 100;
    this.report = "Congratulations! You completed the game.";
  }
};
</script>

<style scoped>
/* Add custom styles for the Game Over component */
</style>