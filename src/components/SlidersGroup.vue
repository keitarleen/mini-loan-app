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
      <div class="input_wrapper">
        <TextInput
          v-model="calculator.amount"
          :label="'Amount'"
          :type="'number'"
          :min="300"
          :max="7200"
          :msg="calculator.errorMsg"
          :error="!calculator.amountIsValid"
        />
      </div>
      <SliderInput v-model="calculator.amount" :min="300" :max="7200" :unit="'€'" />
    </div>

    <div class="row">
      <div class="input_wrapper">
        <SelectInput v-model="calculator.period" :label="'Period'" :options="PERIOD_OPTIONS" />
      </div>
      <SliderInput v-model="calculator.period" :min="2" :max="72" :unit="'months'" :data="data" />
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
  flex-direction: column;
  gap: 1.5rem;

  @include md {
    flex-direction: row-reverse;
  }

  .input_wrapper {
    width: 160px;
  }
}
</style>
