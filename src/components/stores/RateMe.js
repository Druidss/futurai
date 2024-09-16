import { defineStore } from 'pinia'
const initialState = {
  Steps:{
    currentStep: 10,
    maxSteps: 5 
  },
  ConsumptionBehavior: {
    currentStep: 0,
    maxSteps: 5
  },
  HealthLevel: {
    currentStep: 0,
    maxSteps: 5
  },
  SocialActivities: {
    currentStep: 0,
    maxSteps: 5
  },
  PoliticalInvolvement: {
    currentStep: 0,
    maxSteps: 5
  }
}
// const rateMeStore = reactive(initialState)
export const useRateMeStore = defineStore('rateMe', {
  state: () => {
    return {
      Steps: 10,
      ConsumptionBehavior: 0,
      HealthLevel: 0,
      SocialActivities: 0,
      PoliticalInvolvement: 0,
      History:[],
    }
  },
  actions: {
    addEvent() {
      const randomCB = Math.floor(Math.random() * 5) - 2; 
      const randomHL = Math.floor(Math.random() * 5) - 2; 
      const randomSA = Math.floor(Math.random() * 5) - 2; 
      const randomPI = Math.floor(Math.random() * 5) - 2; 

      this.ConsumptionBehavior += randomCB;
      this.HealthLevel += randomHL;
      this.SocialActivities += randomSA;
      this.PoliticalInvolvement += randomPI;

      // Save the changes to the History state
      this.History.push({
        ConsumptionBehavior: randomCB,
        HealthLevel: randomHL,
        SocialActivities: randomSA,
        PoliticalInvolvement: randomPI
      });
  
    },
    stepsDecrease(){
      this.Steps -= 1
    }
  }
})