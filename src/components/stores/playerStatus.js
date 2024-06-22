import { defineStore } from 'pinia'

export const usePlayStatusStore = defineStore('playerStatus', {
  state: () => {
    return {
      events: [] // initialize an empty array to store the events
    }
  },
  actions: {
    addEvent(event) {
      this.events.push(event) // add the new event to the events array
    }
  }
})