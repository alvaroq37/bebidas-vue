<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useModalStore } from '@/stores/modal'
import { useBebidasStore } from '@/stores/bebidas'

const modalStore = useModalStore()
const bebidasStore = useBebidasStore()
console.log(bebidasStore.recetaSeleccionada)
</script>

<template>
  <TransitionRoot as="template" :show="modalStore.modal">
    <Dialog as="div" class="relative z-10" @close="modalStore.handleClickModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6"
            >
              <div>
                <div class="mt-3">
                  <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5">
                    {{ bebidasStore.recetaSeleccionada.strDrink }}
                  </DialogTitle>
                  <div class="flex flex-col md:flex-row gap-5">
                    <img
                      :src="bebidasStore.recetaSeleccionada.strDrinkThumb"
                      :alt="'Imagen de ' + bebidasStore.recetaSeleccionada.strDrink"
                      class="rounded-lg w-full md:w-1/2"
                    />
                    <div>
                      <h2 class="text-2xl font-bold mb-3 mt-5">Ingredientes y Cantidades</h2>
                      <ul>
                        <li v-for="i in 15" :key="i">
                          <span v-if="bebidasStore.recetaSeleccionada['strIngredient' + i]">
                            {{ bebidasStore.recetaSeleccionada['strIngredient' + i] }} -
                            {{ bebidasStore.recetaSeleccionada['strMeasure' + i] }}
                          </span>
                        </li>
                      </ul>
                      <h2 class="text-2xl font-bold mb-3">Instrucciones</h2>
                      <p>{{ bebidasStore.recetaSeleccionada.strInstructions }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                <button
                  type="button"
                  class="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500 transition-colors cursor-pointer"
                  @click="modalStore.handleClickModal"
                >
                  Cerrar
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
