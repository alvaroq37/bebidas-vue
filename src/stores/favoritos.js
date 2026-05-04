import {ref, watch, onMounted}from 'vue';
import { defineStore } from "pinia";
import { useBebidasStore } from "@/stores/bebidas";

export const useFavoritosStore = defineStore("favoritos", () => {

  const bebidasStore = useBebidasStore();
  const favoritos = ref([]);
  onMounted(() => {
    favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? [];
  });
  watch(favoritos,()=>{
    sincronizarLocalStorage();
  },{deep:true})

  const sincronizarLocalStorage = () => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
  };

  const handleClickFavoritos = () => {
    console.log(bebidasStore.recetaSeleccionada);
    favoritos.value.push(bebidasStore.recetaSeleccionada);
    console.log(favoritos.value);
  };

  return { handleClickFavoritos,favoritos };
});
