<script setup lang="ts">
import TextInput from '@/components/TextInput.vue'
import ButtonItem from './ButtonItem.vue'
import { useLoanStore } from '@/stores/loan'

const loan = useLoanStore()

defineProps<{
  handleModalClose: () => void
}>()
</script>

<template>
  <div class="overlay" @click.self="handleModalClose">
    <div class="container">
      <header class="row">
        <h4>Personal details</h4>
        <button class="close_btn" @click="handleModalClose">X</button>
      </header>
      <form class="form" @submit.prevent="loan.submit">
        <TextInput
          :label="'First name'"
          :type="'text'"
          v-model="loan.formData.firstName"
          :style="'secondary'"
          :error="loan.validation.firstName.error"
          :msg="loan.validation.firstName.msg"
        />
        <TextInput
          :label="'Last name'"
          :type="'text'"
          v-model="loan.formData.lastName"
          :style="'secondary'"
          :error="loan.validation.lastName.error"
          :msg="loan.validation.lastName.msg"
        />
        <TextInput
          :label="'Mobile number'"
          :type="'text'"
          v-model="loan.formData.mobile"
          :style="'secondary'"
          :error="loan.validation.mobile.error"
          :msg="loan.validation.mobile.msg"
        />
        <TextInput
          :label="'E-mail'"
          :type="'text'"
          v-model="loan.formData.email"
          :style="'secondary'"
          :error="loan.validation.email.error"
          :msg="loan.validation.email.msg"
        />
        <TextInput
          :label="'Monthly income'"
          :type="'number'"
          v-model="loan.formData.monthlyIncome"
          :style="'secondary'"
          :error="loan.validation.monthlyIncome.error"
          :msg="loan.validation.monthlyIncome.msg"
        />
        <ButtonItem :text="'Submit'" :style="'primary'" />
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overlay {
  &::before {
    content: '';
    display: block;
    align-items: center;
    position: fixed;
    background-color: black;
    opacity: 0.5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
}

.container {
  background-color: $background-primary;
  border-radius: 30px 30px 0 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 11;

  @include lg {
    width: 960px;
    top: 50%;
    left: 50%;
    right: unset;
    bottom: unset;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    padding: 2.5rem;
  }
}

.row {
  display: flex;
  justify-content: space-between;
}

header {
  h4 {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .close_btn {
    background: none;
    border: none;
    cursor: pointer;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
