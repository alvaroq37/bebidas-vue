import { ref, onMounted, reactive } from 'vue'
import { defineStore } from 'pinia'
import APIService from '@/service/APIService'

export const useBebidasStore = defineStore('bebidas', () => {
  const categorias = ref([])
  const busqueda = reactive({
    nombre: '',
    categoria: '',
  })
  const recetas = ref([])
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
  return { categorias, busqueda, obtenerRecetas, recetas }
})
