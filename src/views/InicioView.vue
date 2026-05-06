<script setup>
import RecetaView from '@/components/RecetaView.vue'
import { useBebidasStore } from '@/stores/bebidas'

const bebidasStore = useBebidasStore()
</script>
<template>
  <h1 class="text-6xl font-extrabold">Recetas</h1>
  <p v-if="bebidasStore.noRecetas" class="my-10 text-center text-2xl">No tienes bebidas favoritas aún. ¡Agrega algunas!</p>
  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <RecetaView v-for="receta in bebidasStore.recetas" :key="receta.idDrink" :receta="receta" />
  </div>
</template>
