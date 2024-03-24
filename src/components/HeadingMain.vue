<script setup lang="ts">
withDefaults(
  defineProps<{
    center?: boolean
  }>(),
  {
    center: false
  }
)
</script>

<template>
  <h1 :class="{ center: center }">
    <slot></slot>
  </h1>
</template>

<style scoped lang="scss">
h1 {
  font-size: 2rem;
  line-height: 2.25rem;
  font-family: 'Bitter', serif;

  @include md {
    font-size: 4.25rem;
    line-height: 4.5rem;
    font-weight: 400;
  }

  &.center {
    text-align: center;
  }
}
</style>
