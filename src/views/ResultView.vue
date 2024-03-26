<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { useLoanStore } from '@/stores/loan'
import LoanApproved from '@/components/LoanApproved.vue'
import LoanDeclined from '@/components/LoanDeclined.vue'
import { useCalculatorStore } from '@/stores/calculator'

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
  <main class="wrapper">
    <div class="container">
      <LoanApproved v-if="loan.loanApproved" :navigateHome="handleRouteHome" />
      <LoanDeclined v-if="!loan.loanApproved" :navigateHome="handleRouteHome" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  height: 100vh;

  @include lg {
    height: unset;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
}

.container {
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1rem;
  width: 100%;
  background-color: $background-primary;

  @include lg {
    padding: 0;
    border-radius: 20px;
    width: unset;
  }
}
</style>
