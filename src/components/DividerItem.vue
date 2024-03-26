<script setup lang="ts">
defineProps<{
  position?: 'horizontal' | 'vertical'
}>()
</script>

<template>
  <div class="divider" :class="{ vertical: position === 'vertical' }" />
</template>

<style scoped lang="scss">
.divider {
  height: 1px;
  background-color: $black;
  opacity: 0.15;

  &.vertical {
    height: 100%;
    width: 1px;
  }
}
</style>
