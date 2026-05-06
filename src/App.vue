<script setup>
import { RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue'
import ModalView from './components/ModalView.vue';
import NotificacionView from './components/NotificacionView.vue';
</script>

<template>
  <HeaderView />
  <main class="container mx-auto mt-10">
    <RouterView />
  </main>
  <ModalView />
  <NotificacionView />
</template>
