<!-- 卡牌组件，显示事件和关键卡的信息，处理卡牌被点击后的逻辑。 
显示卡牌的正面或背面。
处理卡牌被点击后的逻辑，决定是否触发事件或关键卡。-->
<template>
  <div class="card-container">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card"
      @click="handleCardClick(card)"
    >
      <h3>{{ card.title }}</h3>
      <p>{{ card.description }}</p>
      <p v-if="card.isKeyEvent">关键事件</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      cardBack: '../assets/imgs/back.png', // replace with your card back image path
    };
  },
  methods: {
    handleCardClick(card) {
      card.flipped = !card.flipped;
    },
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 200px;
  padding: 16px;
  margin: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}
</style>

