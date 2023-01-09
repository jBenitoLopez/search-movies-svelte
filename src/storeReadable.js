// src/stores.js
import { readable } from "svelte/store"

// Este método se ejecutará cuando alguien se
// suscribe a esta store por primera vez
const onStart = (set) => {
  // Creamos este método para usarlo tanto en el
  // addEventListener como en el removeEventListener
  const updateWidth = () => {
    set(window.clientWidth) // actualiza el valor de la store
  }

  // Nos suscribimos al evento resize
  window.addEventListener('resize', updateWidth)

  // Este método se ejecutará cuando el último cliente
  // elimine su suscripción de esta store
  return () => {
    window.removeEventListener('resize', updateWidth)
  }
}

export const windowWidth = readable(window.clientWidth, onStart)