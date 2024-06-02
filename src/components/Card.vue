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
      <ul>
        <li v-for="(choice, choiceIndex) in card.choices" :key="choiceIndex">
          <input 
            type="checkbox" 
            :id="'choice' + index" v-model="selectedChoices[cardIndex][choiceIndex]"
            @change="handleCheckboxChange(cardIndex, choiceIndex)"
          >
          <label :for="'choice' + choiceIndex">{{ choice }}</label>
        </li>
      </ul> 
      <p v-if="card.isKeyEvent">KEY CARD</p>
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
      default: () => ({ choices: [['Choice 1', 'Choice 2', 'Choice 3']] }), 
    },
  },
  data() {
    return {
      flipped: false,
      cardBack,
      selectedChoices: [],
    };
  },
  methods: {
    handleCardClick(card) {
      card.flipped = !card.flipped;
    },
    initializeChoices(cardIndex, choiceIndex) {
      if (!this.selectedChoices[cardIndex]) {
        this.$set(this.selectedChoices, cardIndex, []);
      }
      if (!this.selectedChoices[cardIndex][choiceIndex]) {
        this.$set(this.selectedChoices[cardIndex], choiceIndex, false);
      }
    },
    storeCheckboxStates() {
      // Your logic to store checkbox states
      console.log(this.selectedChoices);
    },
    handleCheckboxChange(cardIndex, choiceIndex) {
      this.initializeChoices(cardIndex, choiceIndex);
      this.storeCheckboxStates();
    },
  },
    mounted() {
    // Example of initializing for a predefined structure (adapt as needed)
    this.initializeChoices(0, 0);  // Initializes selectedChoices[0][0]
    this.initializeChoices(0, 1);  // Initializes selectedChoices[0][1]
  }
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
  aspect-ratio: 108 / 200; /* set the aspect ratio*/
  margin: 8px;
  border-radius: 4px;
  cursor: pointer;
  color: antiquewhite;
  transition: transform 2s;
  transform-style: preserve-3d ;
  flex: 1 0 calc(100% /6);
  max-width: 1 0 calc(100% /6);
}

.card-back{
  border: 1px solid #ccc;
}
.card img {
  width: 100%;
  height: auto;
}
</style>

