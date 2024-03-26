<script setup lang="ts">
import { useLoanStore } from '@/stores/loan'
import ButtonItem from '@/components/ButtonItem.vue'
import DividerItem from '@/components/DividerItem.vue'
import TextItem from '@/components/TextItem.vue'

defineProps<{
  navigateHome: () => void
}>()

const loan = useLoanStore()
</script>

<template>
  <div class="card">
    <div class="header">
      <h2><i>Dear</i> {{ loan.formData.firstName }}</h2>
      <TextItem :align="'center'">Unfortunately, your loan was denied</TextItem>
    </div>
    <div class="content">
      <DividerItem />
      <TextItem :size="'medium'" :align="'center'">
        In addition to your income and expenses, a number of other factors play a role in loan
        decisions.
      </TextItem>
      <DividerItem />
    </div>
    <ButtonItem :text="'Exit'" :style="'primary'" @click="navigateHome" />
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @include lg {
    padding: 5rem 12.5rem;
  }
}

.header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: 2rem;
    line-height: 2.25rem;
    font-family: 'Bitter', serif;
    font-weight: 400;
    text-align: center;

    @include md {
      font-size: 3rem;
      line-height: 3.5rem;
      font-weight: 400;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
