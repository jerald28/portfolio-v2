<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { ui } from '../store.js'
import { navLinks } from '../data/site.js'
import { useTheme } from '../composables/useTheme.js'
import AppIcon from './AppIcon.vue'
import LogoMark from './LogoMark.vue'

const { isDark, toggle } = useTheme()
const nav = ref(null)
const indicator = ref(null)
const links = ref([])

// Slide the pill indicator under the hovered link, or the active one.
function moveIndicator(el) {
  const target = el || links.value.find((a) => a.classList.contains('on'))
  const ind = indicator.value
  if (!ind) return
  if (!target || !target.offsetParent) {
    ind.style.opacity = 0
    return
  }
  ind.style.opacity = 1
  ind.style.left = target.offsetLeft + 'px'
  ind.style.width = target.offsetWidth + 'px'
}

watch(
  () => ui.activeId,
  () => nextTick(() => moveIndicator()),
)
const onResize = () => moveIndicator()
onMounted(() => window.addEventListener('resize', onResize))
onBeforeUnmount(() => window.removeEventListener('resize', onResize))
</script>

<template>
  <header id="hd" class="hd">
    <div class="hb">
      <a class="logo" href="#top" aria-label="Jerald Esguerra, home">
        <LogoMark />
        <em>Jerald Esguerra</em>
      </a>
      <nav id="nv" ref="nav" class="nv" aria-label="Primary" @mouseleave="moveIndicator()">
        <i id="ind" ref="indicator" class="ind" />
        <a
          v-for="l in navLinks"
          :key="l.id"
          ref="links"
          :href="'#' + l.id"
          :class="{ on: ui.activeId === l.id }"
          @mouseenter="moveIndicator($event.currentTarget)"
          >{{ l.label }}</a
        >
      </nav>
      <div class="ha">
        <button id="th" class="ib" type="button" aria-label="Toggle light and dark theme" @click="toggle">
          <AppIcon :name="isDark ? 'sun' : 'moon'" />
        </button>
        <a class="btn pri hc" href="#contact">Let’s talk</a>
        <button id="mm" class="ib" type="button" aria-label="Open menu" @click="ui.menuOpen = true">
          <AppIcon name="menu" />
        </button>
      </div>
    </div>
  </header>
</template>
