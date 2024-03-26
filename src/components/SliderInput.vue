<script setup lang="ts">
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import TextItem from './TextItem.vue'

defineProps<{
  min: number
  max: number
  unit: string
  data?: Array<number>
}>()

const value = defineModel<number>()
</script>

<template>
  <div class="slider">
    <VueSlider
      v-model="value"
      :dotSize="[52, 36]"
      :min="min"
      :max="max"
      :tooltip="'none'"
      :processStyle="{ backgroundColor: '#21093A', borderRadius: 0 }"
      :contained="false"
      :data="data"
      :marks="false"
    >
      <template v-slot:dot="{ focus }">
        <div :class="['dot-handle', { focus }]" :style="{ width: 52 }"></div>
      </template>
    </VueSlider>

    <div class="labels_wrapper">
      <TextItem>{{ min }} {{ unit }}</TextItem>
      <TextItem>{{ max }} {{ unit }}</TextItem>
    </div>
  </div>
</template>

<style lang="scss">
.slider {
  flex-grow: 1;

  .vue-slider-rail {
    width: calc(100% - 3.25rem);
    margin-left: 1.625rem;
    margin-right: 1.625;
    background-color: rgba(33, 9, 58, 0.1);
    border-radius: 0;

    &:before,
    &:after {
      content: '';
      position: absolute;
      height: 0.25rem;
      width: 1.563rem;
      top: 0;
    }

    &::before {
      border-top-left-radius: 0.313rem;
      border-bottom-left-radius: 0.313rem;
      left: -1.563rem;
      background-color: $black;
    }

    &:after {
      background-color: $black;
      opacity: 0.1;
      border-top-right-radius: 0.313rem;
      border-bottom-right-radius: 0.313rem;
      right: -1.563rem;
    }
  }
}

.dot-handle {
  cursor: pointer;
  background: $purple;
  border-radius: 6.25rem;
  box-shadow: none;
  transition: 0.3s;
  height: 100%;
  width: 3.25rem;

  &::after {
    content: url("data:image/svg+xml,%3Csvg width='22' height='12' viewBox='0 0 22 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 6L1 6' stroke='%2321093A'/%3E%3Cpath d='M6 1L1 6L6 11' stroke='%2321093A'/%3E%3Cpath d='M13 6L21 6' stroke='%2321093A'/%3E%3Cpath d='M16 1L21 6L16 11' stroke='%2321093A'/%3E%3C/svg%3E%0A");
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    box-shadow: 0 0 0 0.5rem rgba(170, 147, 255, 0.12);
    transition: 0.3s;
  }
}

.labels_wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
