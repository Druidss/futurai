<!-- 卡牌组件，显示事件和关键卡的信息，处理卡牌被点击后的逻辑。 
显示卡牌的正面或背面。
处理卡牌被点击后的逻辑，决定是否触发事件或关键卡。-->
<template>
  <div class="card-container">
    <div class="card" :class="{ flipped: card.flipped }" @click="handleCardClick(card)">
      <div class="card-front" v-if="!card.flipped">
        <img :src="cardBack" alt="Card Back" />
      </div>
      <div class="card-back" v-else>
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
        <!-- <p> your choice: {{ selectedChoices }}</p> -->
        <select v-model="selectedChoices" :disabled="isDisabled" @change="lockSelect" multiple>
          <option v-for="(choice, choiceIndex) in card.choices" :key="choiceIndex" :value="choice"
            @click="handleCheckboxChange(card.id, choiceIndex)">
            {{ choice }}
          </option>
        </select>
        <!-- <Modal v-model:open="open" title="result" @ok="handleOk">
          <p> {{ rateMeStore.History.slice(-1)[0] }}</p>
        </Modal> -->
      </div>
    </div>
  </div>
</template>

<script>

import cardBack from '../assets/imgs/cardback.png'; 
import { reactive, toRefs } from 'vue';
import { usePlayStatusStore } from './stores/playerStatus'
import { useRateMeStore } from './stores/RateMe'
// import Modal from 'ant-design-vue';



export default {
  name: 'CardComponent',
  props: {
    card: {
      type: Object,
      required: true,
      default: () => ({}), 
    },
  },
  components: {
    // Modal,
  },
  data() {
    return {
      flipped: false,
      cardBack,
      selectedChoices: [],
      isDisabled: false,
    };
  },

  methods: {
    handleCardClick(card) {
      const rateMeStore = useRateMeStore()
      if (!card.clicked) {
        card.flipped = !card.flipped;
        card.clicked = true;
        rateMeStore.stepsDecrease()
      };
    },

    lockSelect() {
      if (this.selectedOption !== "") {
        this.isDisabled = true;  
      }
    }
  },

  setup(props) {
    const playStatusStore = usePlayStatusStore()
    const rateMeStore = useRateMeStore()
    const state = reactive({
      selectedChoices: {}
    });
    const handleCheckboxChange = (cardId, choiceIndex) => {
      if (state.selectedChoices) {
        playStatusStore.addEvent({
          cardId: props.card.id,
          choice: props.card.choices[choiceIndex]
        })
        rateMeStore.addEvent()
      }
    };
   return {
      ...toRefs(state),
      handleCheckboxChange,
      rateMeStore
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
  height: 100%;
  margin-bottom: 20px;
}
.card img {
  width: 100%;
  height: auto;
}
select {
  -webkit-appearance: none; 
  -moz-appearance: none;    
  appearance: none;   
  
  background: none;
  padding: 4px;
  font-size: 16px;
  cursor: pointer;
  margin: 4px;
  border: 0px;
  outline: 0px;
}

select[multiple] {
  height: auto;
  overflow: hidden;
}

select option {
  white-space: normal;
}
</style>

