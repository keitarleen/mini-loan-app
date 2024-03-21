import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculator', () => {
  const amount = ref(0)
  const period = ref(0)

  return { amount, period }
})
