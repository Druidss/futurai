<!-- 卡牌组件，显示事件和关键卡的信息，处理卡牌被点击后的逻辑。 
显示卡牌的正面或背面。
处理卡牌被点击后的逻辑，决定是否触发事件或关键卡。-->


<template>
  <div class="card-container">
    <div
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
          <!-- <input 
            type="checkbox" 
            :id="'choice' + choiceIndex" 
            v-model="selectedChoices[card.id][choiceIndex]"
            @change="handleCheckboxChange(card.id, choiceIndex)"
          > -->
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
import { reactive, toRefs } from 'vue';
import { usePlayStatusStore } from './stores/playerStatus'


export default {
  name: 'CardComponent',
  props: {
    card: {
      type: Object,
      required: true,
      default: () => ({}), 
    },
  },
  data() {
    return {
      flipped: false,
      cardBack,
      selectedChoices: {},
    };
  },

  methods: {
    handleCardClick(card) {
      card.flipped = !card.flipped;
    },
  },

  setup(props) {
    const playStatusStore = usePlayStatusStore()
    const state = reactive({
      selectedChoices: []
    });

    const initializeChoices = (cardIndex, choiceIndex) => {
      if (!state.selectedChoices[cardIndex]) {
        state.selectedChoices[cardIndex] = []; 
      }
      if (typeof state.selectedChoices[cardIndex][choiceIndex] === 'undefined') {
        state.selectedChoices[cardIndex][choiceIndex] = false; // Initialize the boolean value
      }
    };

    const handleCheckboxChange = (cardIndex, choiceIndex) => {
      initializeChoices(props.cardIndex, choiceIndex);
      storeCheckboxStates();
      if (state.selectedChoices[cardIndex][choiceIndex]) {
        playStatusStore.addEvent({
          cardId: props.card.id,
          choice: props.card.choices[choiceIndex]
        })
      }
    };
    const storeCheckboxStates = () => {
      console.log(state.selectedChoices);
    };
   return {
      ...toRefs(state),
      handleCheckboxChange
    };
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
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>

