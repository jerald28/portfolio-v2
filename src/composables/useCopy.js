import { ref } from 'vue'
import { contact } from '../data/site.js'

// Copy the email address and expose a short-lived "copied" flag for feedback.
export function useCopyEmail(duration = 1600) {
  const copied = ref(false)
  let timer
  async function copy() {
    try {
      await navigator.clipboard.writeText(contact.email)
    } catch (e) {
      /* clipboard blocked: the visible address can still be selected */
    }
    copied.value = true
    clearTimeout(timer)
    timer = setTimeout(() => (copied.value = false), duration)
  }
  return { copied, copy }
}
