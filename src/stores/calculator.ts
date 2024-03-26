import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const PERIOD_OPTIONS = [
  { value: 2, label: '2 months' },
  { value: 6, label: '6 months' },
  { value: 12, label: '12 months' },
  { value: 18, label: '18 months' },
  { value: 24, label: '24 months' },
  { value: 48, label: '48 months' },
  { value: 72, label: '72 months' }
]

export const useCalculatorStore = defineStore('calculator', () => {
  const amount = ref<number>(300)
  const period = ref<number>(PERIOD_OPTIONS[0].value)

  const roundToTwo = (number: number) => Math.round(number * 100) / 100

  const monthlyPayment = computed(() => roundToTwo(amount.value / period.value))

  const reset = () => {
    amount.value = 300
    period.value = PERIOD_OPTIONS[0].value
  }

  return { amount, period, monthlyPayment, reset }
})
