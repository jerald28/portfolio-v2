import { ref } from 'vue'

const root = typeof document !== 'undefined' ? document.documentElement : null
const isDark = ref(false)

function systemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function read() {
  const t = root.dataset.theme
  isDark.value = t === 'dark' || (t !== 'light' && systemDark())
}

// Restore a saved theme choice before first paint of the app.
export function initTheme() {
  try {
    const saved = localStorage.getItem('th')
    if (saved) root.dataset.theme = saved
  } catch (e) {
    /* storage unavailable */
  }
  read()
}

export function useTheme() {
  function toggle() {
    root.dataset.theme = isDark.value ? 'light' : 'dark'
    read()
    try {
      localStorage.setItem('th', root.dataset.theme)
    } catch (e) {
      /* storage unavailable */
    }
  }
  return { isDark, toggle }
}
