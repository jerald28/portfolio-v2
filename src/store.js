import { reactive } from 'vue'

// Small shared state for UI pieces that talk to each other
// (header, menu, case-study modal).
export const ui = reactive({
  activeId: 'top',
  menuOpen: false,
  modalIndex: null,
})

export const reducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Resolve a file from /public so it works under any base path.
export const asset = (path) => import.meta.env.BASE_URL + path
