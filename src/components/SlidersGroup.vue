<script setup lang="ts">
import { ref } from 'vue'
import SliderInput from '@/components/SliderInput.vue'
import TextInput from '@/components/TextInput.vue'
import SelectInput from '@/components/SelectInput.vue'
import { computed } from 'vue'
import { useCalculatorStore, PERIOD_OPTIONS } from '@/stores/calculator'

const data = computed(() => PERIOD_OPTIONS.map((item) => item.value))

const calculator = useCalculatorStore()
</script>

<template>
  <div class="wrapper">
    <div class="row">
      <SliderInput v-model="calculator.amount" :min="300" :max="7200" :unit="'€'" />
      <TextInput v-model="calculator.amount" :label="'Amount'" :type="'number'" />
    </div>

    <div class="row">
      <SliderInput v-model="calculator.period" :min="2" :max="72" :unit="'months'" :data="data" />
      <SelectInput v-model="calculator.period" :label="'Period'" :options="PERIOD_OPTIONS" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.row {
  display: flex;
  gap: 1.5rem;
}
</style>
