<script setup>
import RecetaView from '@/components/RecetaView.vue'
import { useFavoritosStore } from '@/stores/favoritos'
const favoritosStore = useFavoritosStore()
</script>
<template>
  <h1 class="text-6xl font-extrabold">Favoritos</h1>
  <p v-if="favoritosStore.noFavoritos" class="my-10 text-center text-2xl">No tienes recetas favoritas aún. ¡Agrega algunas!</p>
  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <RecetaView v-for="receta in favoritosStore.favoritos" :key="receta.idDrink" :receta="receta" />
  </div>
</template>
