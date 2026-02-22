<script setup>
import { computed } from 'vue'
import { useBebidasStore } from '../stores/bebidas'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const paginaInicio = computed(() => route.name === 'inicio')
const bebidasStore = useBebidasStore()
</script>
<template>
  <header class="bg-slate-800" :class="{ header: paginaInicio }">
    <div class="mx-auto container px-5 py-16">
      <div class="justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'inicio' }" class="text-white uppercase font-bold text-2xl">
            <img
              src="/public/img/logo.svg"
              alt="Logotipo de la aplicación"
              class="w-32 inline-block mr-2"
            />
          </RouterLink>
        </div>
        <nav class="space-x-2 mt-4 md:mt-0">
          <RouterLink
            :to="{ name: 'inicio' }"
            class="text-white uppercase font-bold"
            active-class="text-orange-500"
            >Inicio</RouterLink
          >
          <RouterLink
            :to="{ name: 'favoritos' }"
            class="text-white uppercase font-bold"
            active-class="text-orange-500"
            >Favoritos</RouterLink
          >
        </nav>
      </div>

      <form
        v-if="paginaInicio"
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
      >
        <div class="space-y-4">
          <label class="block text-white uppercase font-extrabold text-lg" for="ingrediente"
            >Nombre o Ingredientes</label
          >
          <input
            class="bg-white p-3 w-full rounded-lg focus:outline-none"
            type="text"
            id="ingrediente"
            placeholder="Nombre o Ingrediente: ej. Vodka, Tequila, etc"
            v-model="bebidasStore.busqueda.nombre"
          />
        </div>

        <div class="space-y-4">
          <label class="block text-white uppercase font-extrabold text-lg" for="categoria"
            >Categoría</label
          >
          <select
            class="bg-white p-3 w-full rounded-lg focus:outline-none"
            id="categoria"
            v-model="bebidasStore.busqueda.categoria"
          >
            <option value="">Selecciona una categoría</option>
            <option
              v-for="categoria in bebidasStore.categorias"
              :key="categoria.strCategory"
              :value="categoria.strCategory"
            >
              {{ categoria.strCategory }}
            </option>
          </select>
        </div>
        <input
          type="submit"
          value="Buscar Recetas"
          class="bg-orange-800 hover:bg-orange-900 text-white uppercase font-extrabold text-lg w-full p-2 rounded-lg cursor-pointer"
        />
      </form>
    </div>
  </header>
</template>
<style>
.header {
  background-image: url('/public/img/bg.jpg');
  background-size: cover;
  background-position: center;
}
</style>
