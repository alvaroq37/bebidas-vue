import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useFavoritosStore } from './favoritos';
import { useBebidasStore } from './bebidas';

export const useModalStore = defineStore('modal', () => {
  const favoritosStore = useFavoritosStore()
  const bebidasStore = useBebidasStore()
  const modal = ref(false)
  function handleClickModal() {
    modal.value = !modal.value
  }
  const textoBoton = computed(() => {
    return favoritosStore.existeFavorito(bebidasStore.recetaSeleccionada.idDrink) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos';
  });
  return { modal, handleClickModal, textoBoton };
});
