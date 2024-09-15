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
        rateMeStore.ConsumptionBehavior += 1
        break
      case 'HealthLevel':
        rateMeStore.HealthLevel += 1
        break
      case 'SocialActivities':
        rateMeStore.SocialActivities += 1
        break
      case 'PoliticalInvolvement':
        rateMeStore.PoliticalInvolvement += 1
        break
      default:
        console.error(`Unknown category: ${category}`)
    }

    }
  }
})