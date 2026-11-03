import { onMounted, onBeforeUnmount } from 'vue'
import { ui } from '../store.js'
import { sections } from '../data/site.js'

// Tracks which section sits in the middle of the viewport and stores its id,
// so the header can highlight it.
export function useActiveSection() {
  let io
  onMounted(() => {
    if (!('IntersectionObserver' in window)) return
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) ui.activeId = e.target.dataset.sec
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => {
      const el = s.id === 'top' ? document.querySelector('.hero') : document.getElementById(s.id)
      if (el) {
        el.dataset.sec = s.id
        io.observe(el)
      }
    })
  })
  onBeforeUnmount(() => io && io.disconnect())
}
