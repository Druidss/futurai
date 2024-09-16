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
    }
  },
  actions: {
    addEvent(category) {
      switch (category) {
      case 'ConsumptionBehavior':
        this.ConsumptionBehavior += 1
        break
      case 'HealthLevel':
        this.HealthLevel += 1
        break
      case 'SocialActivities':
        this.SocialActivities += 1
        break
      case 'PoliticalInvolvement':
        this.PoliticalInvolvement += 1
        break
      default:
        console.error(`Unknown category: ${category}`)
    }

    },
    stepsDecrease(){
      this.Steps -= 1
    }
  }
})