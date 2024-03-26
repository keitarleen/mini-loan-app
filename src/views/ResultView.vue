<script setup lang="ts">
import { useRouter } from 'vue-router'
import ButtonItem from '@/components/ButtonItem.vue'
import HeadingMain from '@/components/HeadingMain.vue'
import TextItem from '@/components/TextItem.vue'
import { useCalculatorStore } from '@/stores/calculator'

const router = useRouter()
const calculator = useCalculatorStore()

const handleRouteHome = () => {
  router.push('/')
}
</script>

<template>
  <main class="wrapper">
    <div class="container">
      <div class="image">
        <div class="img_bg">
          <img src="@/assets/inbank_result.png" />
        </div>
      </div>
      <div class="content">
        <div>
          <HeadingMain :center="true"><i>Good</i> news!</HeadingMain>
          <TextItem :align="'center'">Your loan has been approved</TextItem>
        </div>
        <section class="details">
          <div class="divider" />
          <div class="row">
            <TextItem :weight="'bold'">Loan amount</TextItem>
            <TextItem>{{ calculator.amount }} €</TextItem>
          </div>
          <div class="divider" />

          <div class="row">
            <TextItem :weight="'bold'">Loan period</TextItem>
            <TextItem>{{ calculator.period }} months</TextItem>
          </div>
          <div class="divider" />

          <div class="row">
            <TextItem :weight="'bold'">Monthly payment</TextItem>
            <TextItem>{{ calculator.monthlyPayment }} €</TextItem>
          </div>
          <div class="divider" />
        </section>
        <ButtonItem :text="'Back to home page'" :style="'primary'" @click="handleRouteHome" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem 1rem;
  width: 100%;
  background-color: $background-primary;

  @include lg {
    padding: 0;
    display: grid;
    grid-template-columns: 50% 1fr;
    max-width: 1000px;
    max-height: 480px;
    height: 480px;
    border-radius: 20px;
  }

  @include xl {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    max-height: 680px;
    height: 680px;
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
      object-fit: cover;
      width: 452px;
      height: 420px;
    }
  }

  @include xl {
    img {
      width: 552px;
      height: 520px;
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

.divider {
  height: 1px;
  background-color: $black;
  opacity: 0.15;
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
