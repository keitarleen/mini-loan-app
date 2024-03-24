<script setup lang="ts">
defineProps<{
  text: string
  style: 'primary' | 'secondary'
}>()
</script>

<template>
  <button :class="{ [style]: style }">
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
button {
  border: none;
  cursor: pointer;
  background-color: $purple;
  border-radius: 100px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  transition: 150ms ease-out;

  &:hover,
  &:focus {
    outline: none;
    background-color: $purple-light;
  }

  &:active {
    background-color: $purple-shadow;
  }

  &:disabled {
    background-color: $gray;
    color: $gray-dark;
  }

  &.secondary {
    background-color: $gray-light;
  }
}
</style>
