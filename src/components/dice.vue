
<template>
  <div>
    <button @click="rollDice">Roll Dice</button>
    <p>Result: {{ diceResult }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diceResult: null
    };
  },
  methods: {
    rollDice() {
      this.diceResult = Math.floor(Math.random() * 6) + 1;
    }
  }
};
</script>