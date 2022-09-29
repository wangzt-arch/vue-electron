<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <div class="wrapper">
    <Header></Header>
    <div class="router-view">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  color: $primary-color;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .router-view {
    flex: 1;
  }
}
</style>
