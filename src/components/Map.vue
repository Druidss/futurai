<!-- 地图组件，显示 6x6 的卡牌布局，处理卡牌的随机抽取和铺开。 
从正常的事件牌堆中随机抽取 34 张牌，加入两张特殊的关键牌，混洗后形成 6x6 的地图。
控制卡牌的布局和显示。
处理卡牌点击事件，触发 Event 组件的显示。-->

<template>
  <div>
    <div class="card-layout">
      <!-- Display the 6x6 card layout here -->
      <div v-for="(row, rowIndex) in cardLayout" :key="rowIndex">
        <Card v-for="(card, index) in cardLayout" :key="index" :cards="cards" />
      </div>
    </div>
    <button @click="extractRandomCard">Extract Random Card</button>
    <button @click="placeCard">Place Card</button>
    
  </div>
</template>

<script>
import Card from './Card.vue';
export default {
  name: 'MapComponent',
  components: {
    Card
  },
  data() {
    return {
      cardLayout: Array(6).fill().map(() => Array(6).fill({})), 
      extractedCard: null, // Variable to store the extracted card
       cards: [
        {
          title: 'Event',
          description: 'Choose your choice',
          flipped: false,
          choices: ['Choice 1', 'Choice 2', 'Choice 3'],
          image: 'path/to/your/card/image.jpg', 
        },
      ],
    };
  },
  methods: {
    extractRandomCard() {
      // Logic to extract a random card from the card layout
      // Assign the extracted card to the extractedCard variable
    },
    placeCard() {
      // Logic to place the extracted card back into the card layout
      // Update the cardLayout array with the placed card
    }
  }
};
</script>

<style>
.card-layout {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
}
</style>