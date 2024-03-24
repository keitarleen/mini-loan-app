<script setup lang="ts">
defineProps<{
  content?: Boolean
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
  background-color: $sage-green;

  @include md {
    border-radius: 200px;
  }

  &.content {
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
