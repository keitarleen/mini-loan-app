<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'small' | 'medium' | 'regular' | 'large'
    weight?: 'bold' | 'normal' | 'thin'
    align?: 'center' | 'normal'
  }>(),
  {
    size: 'regular',
    weight: 'normal',
    align: 'normal'
  }
)
</script>

<template>
  <p :class="{ [size]: size, [weight]: weight, [align]: align }">
    <slot />
  </p>
</template>

<style scoped lang="scss">
p {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  opacity: 0.9;

  &.small {
    opacity: 0.6;
    line-height: 1rem;
    font-size: 0.75rem;
  }

  &.medium {
    opacity: 0.75;
    line-height: 1.25rem;
    font-size: 0.875rem;
  }

  &.bold {
    font-weight: 500;
  }

  &.center {
    text-align: center;
  }
}
</style>
