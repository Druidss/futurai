<!-- 地图组件，显示 6x6 的卡牌布局，处理卡牌的随机抽取和铺开。 
从正常的事件牌堆中随机抽取 34 张牌，加入两张特殊的关键牌，混洗后形成 6x6 的地图。(所有的card.data 数据都在card.json文件中)
控制卡牌的布局和显示。
处理卡牌点击事件，触发 Event 组件的显示。-->

<template>
  <div>
    <div class="card-layout">
      <div v-for="(row, rowIndex) in cardLayout" :key="rowIndex">
        <Card 
          v-for="(card, cardIndex) in cardLayout" 
          :key="cardIndex" 
          :card="card" 
        />
      </div>
    </div>
    <button @click="extractCard">Shuffle Card</button>
  </div>
</template>

<script>
import Card from './Card.vue';
import cardData from './data/card.json'

export default {
  name: 'MapComponent',
  components: {
    Card
  },
  data() {
    return {
      cardLayout: [], // 6x6 card layout
    };
  },
  methods: {
    initializeCardLayout() {
      const shuffledCards = this.shuffleCards(cardData);
      this.cardLayout = Array.from({ length: 6 }, (_, rowIndex) =>
        shuffledCards.slice(rowIndex * 6, rowIndex * 6 + 6)
      );
    },
    shuffleCards(cards) {
      const shuffled = [...cards];

      // Fisher-Yates (Knuth) Shuffle Algorithm
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    },
    extractCard() {
      if (this.cardLayout.length === 0) {
        this.initializeCardLayout();
      }
    },
  }
};
</script>

<style>
.card-layout {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
}
.card-row {
  display: contents; 
}
</style>