import { createApp } from 'vue'
import App from './App.vue'
import { initTheme } from './composables/useTheme.js'
import './assets/main.css'

initTheme()
createApp(App).mount('#app')
