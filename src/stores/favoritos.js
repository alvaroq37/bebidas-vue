import { ref, watch, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import { useBebidasStore } from '@/stores/bebidas'
import { useModalStore } from '@/stores/modal'
import { useNotificacionStore } from '@/stores/notificaciones'

export const useFavoritosStore = defineStore('favoritos', () => {
  const bebidasStore = useBebidasStore()
  const modalStore = useModalStore()
  const notificacionStore = useNotificacionStore()
  const favoritos = ref([])
  onMounted(() => {
    favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
  })
  watch(
    favoritos,
    () => {
      sincronizarLocalStorage()
    },
    { deep: true },
  )

  function existeFavorito(id) {
    const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
    return favoritosLocalStorage.some((favorito) => favorito.idDrink === id)
  }

  const sincronizarLocalStorage = () => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }

  function agregarFavorito() {
    favoritos.value.push(bebidasStore.recetaSeleccionada)
    notificacionStore.texto = 'Receta agregada a favoritos'
    notificacionStore.error = false
    notificacionStore.mostrar = true
  }
  function eliminarFavorito() {
    favoritos.value = favoritos.value.filter(
      (favorito) => favorito.idDrink !== bebidasStore.recetaSeleccionada.idDrink,
    )
    notificacionStore.texto = 'Receta eliminada de favoritos'
    notificacionStore.error = true
    notificacionStore.mostrar = true
  }
  const handleClickFavoritos = () => {
    if (existeFavorito(bebidasStore.recetaSeleccionada.idDrink)) {
      eliminarFavorito()
    } else {
      agregarFavorito()
    }
    modalStore.modal = false
  }
  const noFavoritos = computed(() => favoritos.value.length === 0)
  return { handleClickFavoritos, favoritos, existeFavorito, noFavoritos }
})
