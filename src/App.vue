<script setup>
import {RouterView} from 'vue-router';
import HeaderView from './components/HeaderView.vue';

</script>

<template>
  <HeaderView />
  <main class="container mx-auto mt-10">
    <RouterView />
  </main>
</template>
