<script setup lang="ts">
defineProps<{
  label: string
  type: 'text' | 'number'
  placeholder?: string
  msg?: string
  style?: 'secondary'
  error?: boolean
}>()
const value = defineModel<number | string>()
</script>

<template>
  <div class="input_wrapper">
    <input
      v-model="value"
      type="type"
      :placeholder="placeholder"
      :class="{ secondary: style === 'secondary', error: error }"
    />
    <label :class="{ top: type === 'number' ? value !== 0 : value !== '' }">{{ label }}</label>
    <p v-if="msg || (msg && msg?.length > 0)" class="msg" :class="{ error: error }">{{ msg }}</p>
  </div>
</template>

<style scoped lang="scss">
.input_wrapper {
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
    pointer-events: none;
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

    &.secondary {
      border-color: #dedede;
    }

    &.error {
      border-color: $alert;

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px $alert;
      }

      &:focus + label {
        color: $alert;
      }
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

  .msg {
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-weight: 500;
    color: $text-gray;
    padding: 0.25rem 1rem 0 1rem;

    &.error {
      color: $alert;
    }
  }
}
</style>
