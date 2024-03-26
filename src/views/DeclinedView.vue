<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLoanStore } from '@/stores/loan'
import LoanDeclined from '@/components/LoanDeclined.vue'
import { useCalculatorStore } from '@/stores/calculator'
import ResultContainer from '../components/ResultContainer.vue'

const router = useRouter()
const loan = useLoanStore()
const calculator = useCalculatorStore()

const handleRouteHome = async () => {
  loan.reset()
  calculator.reset()
  router.push('/')
}
</script>

<template>
  <ResultContainer>
    <LoanDeclined :navigateHome="handleRouteHome" />
  </ResultContainer>
</template>
