<!-- 卡牌组件，显示事件和关键卡的信息，处理卡牌被点击后的逻辑。 
显示卡牌的正面或背面。
处理卡牌被点击后的逻辑，决定是否触发事件或关键卡。-->


<template>
  <div class="card-container">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card"
      :class="{ flipped: card.flipped }"
      @click="handleCardClick(card)"
    >
      <div class="card-front" v-if="!card.flipped">
        <img :src="cardBack" alt="Card Back" /> 
      </div>
    <div class="card-back" v-else>
      <h3>{{ card.title }}</h3>
      <p>{{ card.description }}</p>
      <p v-if="card.isKeyEvent">EVENT</p>
    </div>
    </div>
  </div>
</template>

<script>
import cardBack from '../assets/imgs/cardback.png'; 
export default {
  name: 'CardComponent',
  props: {
    cards: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cardBack,
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
  justify-content: space-between;
  perspective: 1000px;
}

.card {
  width: 100%; 
  aspect-ratio: 108 / 200; /* set the aspect ratio */
  border-radius: 4px;
  cursor: pointer;
  color: antiquewhite;
  transition: transform 2s;
  transform-style: preserve-3d ;
  flex: 1 0 calc(100% /6);
  max-width: 1 0 calc(100% /6);
}
.card img {
  width: 100%;
  height: auto;
}
</style>

