<script setup lang="ts">
defineProps<{
  label: string
  type: 'text' | 'select' | 'number'
}>()
const value = defineModel<Number>()
</script>

<template>
  <div class="input_wrapper">
    <input placeholder="input" v-model="value" value="value" type="type" />
    <label :class="{ top: value !== 0 }">{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
.input_wrapper {
  position: relative;

  @include md {
    width: 160px;
  }

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
    // when no placeholder, label should be instead

    &.top {
      top: -0.5rem;
      left: 0.5rem;
      font-size: 0.75rem;
      line-height: 1.125rem;
      color: $purple-dark;
      font-weight: 500;
    }
  }

  input {
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
