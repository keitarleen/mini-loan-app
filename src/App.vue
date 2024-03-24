<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Inbank logo" class="logo" src="@/assets/logo.svg" height="40" width="114" />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  padding: 1rem;

  @media (min-width: 1553px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1536px;
    padding: 1.5rem 2.5rem;
  }
}
</style>
