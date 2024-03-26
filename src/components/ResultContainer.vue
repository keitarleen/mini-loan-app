<template>
  <main class="wrapper">
    <div class="container">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  height: 100vh;

  @include lg {
    height: unset;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
}

.container {
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1rem;
  width: 100%;
  background-color: $background-primary;

  @include lg {
    padding: 0;
    border-radius: 20px;
    width: unset;
  }
}
</style>
