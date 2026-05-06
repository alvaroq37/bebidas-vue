import { ref, onMounted, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import APIService from '@/service/APIService'
import { useModalStore } from '@/stores/modal';

export const useBebidasStore = defineStore('bebidas', () => {
  const modalStore = useModalStore()
  const categorias = ref([])
  const busqueda = reactive({
    nombre: '',
    categoria: '',
  })
  const recetas = ref([])
  const recetaSeleccionada = ref({})
  onMounted(async () => {
    try {
      const {
        data: { drinks },
      } = await APIService.obtenerCategorias()
      categorias.value = drinks
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  })
  async function obtenerRecetas() {
    try {
      const {
        data: { drinks },
      } = await APIService.obtenerRecetas(busqueda)
      recetas.value = drinks
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  }

  async function seleccionarBebida(id) {
    try {
      const {
        data: { drinks },
      } = await APIService.obtenerReceta(id)
      recetaSeleccionada.value = drinks[0]
      modalStore.handleClickModal()
    } catch (error) {
      console.error('Error fetching recipe details:', error)
    }
  }
  const noRecetas = computed(() => recetas.value.length === 0)

  return { categorias, busqueda, obtenerRecetas, recetas, seleccionarBebida, recetaSeleccionada, noRecetas }
})
