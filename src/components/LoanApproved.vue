<script setup lang="ts">
import ButtonItem from '@/components/ButtonItem.vue'
import TextItem from '@/components/TextItem.vue'
import { useCalculatorStore } from '@/stores/calculator'
import DividerItem from './DividerItem.vue'

defineProps<{
  navigateHome: () => void
}>()

const calculator = useCalculatorStore()
</script>

<template>
  <div class="card">
    <div class="image">
      <div class="img_bg">
        <img src="@/assets/inbank_result.png" />
      </div>
    </div>
    <div class="content">
      <div class="header">
        <h2><i>Good</i> news!</h2>
        <TextItem :align="'center'">Your loan has been approved</TextItem>
      </div>
      <section class="details">
        <DividerItem />
        <div class="row">
          <TextItem :weight="'bold'">Loan amount</TextItem>
          <TextItem>{{ calculator.amount }} €</TextItem>
        </div>
        <DividerItem />

        <div class="row">
          <TextItem :weight="'bold'">Loan period</TextItem>
          <TextItem>{{ calculator.period }} months</TextItem>
        </div>
        <DividerItem />

        <div class="row">
          <TextItem :weight="'bold'">Monthly payment</TextItem>
          <TextItem>{{ calculator.monthlyPayment }} €</TextItem>
        </div>
        <DividerItem />
      </section>
      <ButtonItem :text="'Back to home page'" :style="'primary'" @click="navigateHome" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @include lg {
    padding: 0;
    display: grid;
    grid-template-columns: 50% 1fr;
    width: 800px;
    height: 600px;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  @include xl {
    margin-left: auto;
    margin-right: auto;
    width: 1200px;
    max-width: 1200px;
    gap: 1.5rem;
  }
}

.image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.img_bg {
  background: $gray-light;
  border-radius: 80px;
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 160px;
  }

  @include lg {
    width: 100%;
    height: 100%;
    border-radius: 20px 0 0 20px;
    position: relative;
    border: 4px solid $background-primary;

    img {
      position: absolute;
      right: -1.5rem;
      object-fit: contain;
      width: 90%;
      height: 90%;
    }
  }

  @include xl {
    img {
      right: -2.5rem;
    }
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
  gap: 2.5rem;

  @include lg {
    padding: 2.5rem 2rem 2.5rem 2.75rem;
    justify-content: center;
  }
}

.row {
  display: grid;
  grid-template-columns: 60% 1fr;
  padding: 0.75rem 0;
  gap: 1rem;
}

.details {
  display: flex;
  flex-direction: column;
}
</style>
