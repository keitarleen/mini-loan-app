<script setup lang="ts">
import ChevronIcon from '@/components/ChevronIcon.vue'
defineProps<{
  label: string
  options: Array<{ label: string; value: number }>
}>()

const value = defineModel<Number>()
</script>

<template>
  <div class="select_wrapper">
    <select placeholder="label" v-model="value">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :selected="value === option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <label :class="{ top: value !== 0 }">{{ label }}</label>
    <div class="arrow">
      <ChevronIcon />
    </div>
  </div>
</template>

<style scoped lang="scss">
.select_wrapper {
  position: relative;

  label {
    position: absolute;
    top: 1rem;
    left: 0.5rem;
    font-size: 1rem;
    color: $text-gray;
    font-weight: 400;
    background-color: $background-primary;
    border-radius: 100px;
    padding: 0 0.5rem;
    transition: all 0.3s ease-in-out;

    &.top {
      top: -0.5rem;
      left: 0.5rem;
      font-size: 0.75rem;
      line-height: 1.125rem;
      color: $purple-dark;
      font-weight: 500;
    }
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid $purple-dark;
    padding: 0.25rem 1rem;
    border-radius: 0.5rem;
    background-color: $background-primary;
    height: 3.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    width: 100%;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px $purple-dark;
    }

    &:focus + label {
      top: -0.5rem;
      left: 0.5rem;
      font-size: 0.75rem;
      line-height: 1.125rem;
      color: $purple-dark;
      font-weight: 500;
    }
  }

  .arrow {
    position: absolute;
    top: 1.125rem;
    right: 1rem;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    appearance: textfield;
  }
}
</style>
