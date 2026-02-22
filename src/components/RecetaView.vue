<script setup>
defineProps({
  receta: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="rounded-lg shadow">
    <div class="overflow-hidden">
      <img
        :src="receta.strDrinkThumb"
        :alt="'Imagen de ' + receta.strDrink"
        class="hover:scale-125 transition-transform hover:rotate-2"
      />
    </div>
    <div class="p-5">
      <h2 class="text-2xl truncate font-extrabold">{{ receta.strDrink }}</h2>
      <button
        type="button"
        class="bg-orange-400 text-white uppercase font-bold w-full mt-5 p-3 rounded-lg hover:bg-orange-500 transition-colors cursor-pointer"
      >
        Ver Receta
      </button>
    </div>
  </div>
</template>
