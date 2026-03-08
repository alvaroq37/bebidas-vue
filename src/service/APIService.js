import api from '../lib/axios'

export default {
  async obtenerCategorias() {
    try {
      return await api.get('/list.php?c=list')
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  },
  async obtenerRecetas({ categoria, nombre }) {
    try {
      return await api.get(`/filter.php?c=${categoria}&i=${nombre}`)
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  },
  async obtenerReceta(id) {
    try {
      return await api.get(`/lookup.php?i=${id}`)
    } catch (error) {
      console.error('Error fetching recipe details:', error)
    }
  },
}
