<script setup lang="ts">
defineProps<{
  content?: boolean
}>()
</script>

<template>
  <div class="card" :class="{ content: content }">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: 100px;

  @include md {
    border-radius: 200px;
  }

  &.content {
    background-color: $sage-green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 1.5rem;
    gap: 1rem;

    @include md {
      padding: 5rem 2.5rem;
      gap: 1.5rem;
    }
  }
}
</style>
