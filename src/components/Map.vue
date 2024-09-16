<!-- 地图组件，显示 6x6 的卡牌布局，处理卡牌的随机抽取和铺开。 
从正常的事件牌堆中随机抽取 36 张牌,混洗后形成 6x6 的地图。(所有的card.data 数据都在card.json文件中)
控制卡牌的布局和显示。
处理卡牌点击事件，触发 Event 组件的显示。-->

<template>
  <div>
    <div v-if="isShuffled">
      <h3 class="steps map-dashbord"> steps left: {{ rateMeStore.Steps }}</h3>
      <RateMe class="map-rateme" />
    </div>
    <div class="card-layout">
      <div v-for="(row, rowIndex) in cardLayout" :key="rowIndex">
        <Card v-for="(card, cardIndex) in row" :key="cardIndex" :card="card" :cardIndex="cardIndex" />
      </div>
    </div>
    <button @click="extractCard">Shuffle Card</button>
    <div v-if="!isShuffled" class="rules">
      <h1> Futur Ai</h1>
      <h3> FuturAI is an innovative online card game set in a speculative future where algorithms dictate every aspect
        of life</h3>
      Rules:
      <p>setup: Randomly draw 36 cards from the regular event deck. Shuffle the cards and lay them out to form a 6x6
        grid.</p>
      <p>Goal: Collect cards within a limited number of steps, experiencing the most events to create your digital
        identity.</p>
      <p>Mechanics: Players start from the top left corner of the grid. Each turn, players can only choose a card
        directly.</p>
      <p>End: At the end of the game, a short report specific to the players experiences will be generated based RateMe system.</p>
    </div>
  </div>
</template>

<script>
import RateMe from './RateMeSystem.vue';
import Card from './Card.vue';
import cardData from './data/card.json'
import { useRateMeStore } from './stores/RateMe'

export default {
  name: 'MapComponent',
  components: {
    Card,
    RateMe
  },
  data() {
    return {
      cardLayout: [],
      isShuffled: false,
    };
  },
  methods: {
    initializeCardLayout() {
      const shuffledCards = this.shuffleCards(cardData);
      // this.cardLayout = Array.from({ length: 6 }, (_, rowIndex) =>
      //   shuffledCards.slice(rowIndex * 6, rowIndex * 6 + 6)
      // );
      this.cardLayout = cardData;
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
        this.isShuffled = true;
      }
    },
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
.map-dashbord{
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: center;
  max-width: 300px;
  color: antiquewhite;
  background-color: rgba(255, 255, 255, 0.3);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.map-rateme {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 660px;
  padding: 10px;
  color: antiquewhite;
  background-color: rgba(255, 255, 255, 0.3);

  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 1;
}
.card-layout {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
}
.card-row {
  display: contents; 
}
.steps{
  color: antiquewhite;
  font-size: x-large;
}

.rules{
  margin: 50px;
  color: antiquewhite;
}
</style>