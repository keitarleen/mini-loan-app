<script setup lang="ts">
import ButtonItem from '@/components/ButtonItem.vue'
import CardItem from '@/components/CardItem.vue'
import HeadingMain from '@/components/HeadingMain.vue'
import TextItem from '@/components/TextItem.vue'
import Sliders from '@/components/SlidersGroup.vue'
import { useCalculatorStore } from '@/stores/calculator'

const calculator = useCalculatorStore()
</script>

<template>
  <div class="container">
    <CardItem :content="true">
      <TextItem :weight="'bold'">Mini loan</TextItem>
      <HeadingMain :center="true"><i>Take charge</i> of unexpected costs</HeadingMain>
      <TextItem :align="'center'">
        Finance unforeseen expenses with InBank. A quick and easy application process with and
        instant credit decision
      </TextItem>
      <ButtonItem :text="'Apply now'" :style="'secondary'" />
    </CardItem>
    <CardItem>
      <img class="image" src="@/assets/InBank_asset.webp" />
    </CardItem>
  </div>

  <div class="calculator_container">
    <div class="calculator">
      <div class="content">
        <HeadingMain>Calculate your <i>monthly payment</i></HeadingMain>
        <TextItem>
          Estimate your monthly payments based on the chosen loan amount and time period
        </TextItem>
      </div>
      <div class="divider" />
      <div class="sliders_wrapper">
        <Sliders />
        <div class="result">
          <TextItem :weight="'bold'">Monthly payment</TextItem>
          <HeadingMain>{{ calculator.monthlyPayment }} €</HeadingMain>
          <ButtonItem :text="'Apply now'" :style="'primary'" />
          <TextItem :size="'small'">
            The calculation is approximate and may differ from the conditions offered to you. Please
            submit a loan application to receive a personal offer. Financial services are provided
            by AS Inbank Finance.
          </TextItem>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  padding: 1rem 1rem 2.5rem 1rem;

  @include md {
    padding: 1rem 2.5rem 5rem;
    flex-direction: row;
  }

  @include xl {
    margin-left: auto;
    margin-right: auto;
    max-width: 1536px;
    gap: 1.5rem;
  }
}

.divider {
  display: none;

  @include md {
    display: block;
    width: 1px;
    height: 100%;
    background: $black;
    opacity: 0.15;
  }
}

.image {
  object-fit: cover;
  height: 100%;
  width: 100%;

  @include md {
    border-radius: 200px;
  }
}

.calculator_container {
  background-color: $purple-lighter;
  display: flex;
  justify-content: center;

  @include xl {
    margin-left: auto;
    margin-right: auto;
  }
}

.calculator {
  background-color: $purple-lighter;
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  .content {
    padding: 4rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @include md {
      padding: 5rem 2.5rem;
      gap: 1.5rem;
    }
  }

  @include md {
    flex-direction: row;
    gap: 2.5rem;
  }

  @include xl {
    max-width: 1556px;
    padding: 2.5rem 5rem;
  }

  .sliders_wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
}

.ib-slider-handle {
  width: 1rem;
  height: 6px;
  background-color: red;
}
</style>
