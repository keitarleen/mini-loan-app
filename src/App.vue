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
  margin: 1rem;
}
</style>
