<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { projects } from '../data/projects.js'
import { ui, asset, reducedMotion } from '../store.js'
import { gsap, motionOn } from '../composables/useAnimations.js'
import AppIcon from './AppIcon.vue'

// Draggable, endlessly looping carousel with momentum, snapping,
// keyboard arrows and a 3D focus effect on the centered card.
const N = projects.length
const copies = [0, 1, 2] // three copies of the list make the loop seamless
const car = ref(null)
const rail = ref(null)
const bubble = ref(null)
const label = ref(null)
const current = ref(0)

let cards = []
let cardW = 0
let step = 0
let carW = 0
let x = 0
let tx = 0
let vel = 0
let dragging = false
let moved = false
let startX = 0
let startTx = 0
let lastX = 0
let lastT = 0
let inView = false
let raf = 0
let pointerId = null
let io

const centerOf = (k) => carW / 2 - cardW / 2 - k * step
const indexAt = (v) => (carW / 2 - cardW / 2 - v) / step

function measure() {
  carW = car.value.clientWidth
  cardW = cards[0].offsetWidth
  step = cards[1].offsetLeft - cards[0].offsetLeft
}

function keepInMiddleCopy() {
  const span = N * step
  while (indexAt(x) >= 2 * N - 0.5) {
    x += span
    tx += span
  }
  while (indexAt(x) < N - 0.5) {
    x -= span
    tx -= span
  }
}

function setCurrent(i) {
  if (i === current.value) return
  current.value = i
  if (motionOn && label.value)
    gsap.fromTo(label.value, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' })
}

function frame() {
  x += (tx - x) * (reducedMotion ? 1 : 0.13)
  if (Math.abs(tx - x) < 0.05) x = tx
  keepInMiddleCopy()
  rail.value.style.transform = `translate3d(${x}px,0,0)`
  const k = indexAt(x)
  const lo = Math.max(0, Math.floor(k) - 3)
  const hi = Math.min(cards.length - 1, Math.ceil(k) + 3)
  for (let j = lo; j <= hi; j++) {
    const d = j - k
    const a = Math.min(Math.abs(d), 2.2)
    const el = cards[j]
    el.style.transform = `perspective(1500px) scale(${(1 - 0.1 * a).toFixed(3)}) rotateY(${Math.max(-14, Math.min(14, -d * 8)).toFixed(2)}deg)`
    el.style.opacity = Math.max(0.35, 1 - 0.3 * a).toFixed(3)
    el.firstElementChild.firstElementChild.style.transform = `translateX(${(-d * 14).toFixed(1)}px) scale(1.06)`
    el.classList.toggle('on', Math.abs(d) < 0.5)
  }
  setCurrent(((Math.round(k) % N) + N) % N)
  raf = inView ? requestAnimationFrame(frame) : 0
}

function go(delta) {
  tx = centerOf(Math.round(indexAt(tx)) + delta)
}

function onPointerDown(e) {
  if (e.target.closest('button')) return
  if (e.pointerType === 'mouse') {
    if (e.button !== 0) return
    e.preventDefault() // stop native link/image drag and text selection from stealing the gesture
  }
  dragging = true
  moved = false
  startX = lastX = e.clientX
  startTx = tx
  lastT = performance.now()
  vel = 0
  pointerId = e.pointerId
  car.value.classList.add('dg')
}
function onPointerMove(e) {
  const r = car.value.getBoundingClientRect()
  bubble.value.style.left = e.clientX - r.left + 'px'
  bubble.value.style.top = e.clientY - r.top + 'px'
  if (!dragging) return
  const dx = e.clientX - startX
  if (Math.abs(dx) > 6 && !moved) {
    moved = true
    try {
      car.value.setPointerCapture(pointerId)
    } catch (_) {
      /* pointer already released */
    }
  }
  tx = startTx + dx
  const now = performance.now()
  vel = (e.clientX - lastX) / Math.max(1, now - lastT)
  lastX = e.clientX
  lastT = now
}
function onPointerUp() {
  if (!dragging) return
  dragging = false
  car.value.classList.remove('dg')
  const k0 = Math.round(indexAt(tx))
  let k = Math.round(indexAt(tx + Math.max(-2.5, Math.min(2.5, vel)) * 220))
  k = Math.max(k0 - 2, Math.min(k0 + 2, k))
  tx = centerOf(k)
}

// A real drag should not count as a click on a card.
function onRailClick(e) {
  if (moved) {
    e.stopPropagation()
    e.preventDefault()
    moved = false
    return
  }
  if (e.target.closest('a.lv')) return // live preview opens the site, not the case study
  const card = e.target.closest('.pc')
  if (!card) return
  tx = centerOf(cards.indexOf(card))
  ui.modalIndex = +card.dataset.k
}

function onKey(e) {
  if (!inView || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return
  if (ui.modalIndex !== null || ui.menuOpen) return
  if (/INPUT|TEXTAREA/.test(document.activeElement.tagName)) return
  go(e.key === 'ArrowLeft' ? -1 : 1)
}

function recenter() {
  const k = Math.round(indexAt(tx))
  measure()
  x = tx = centerOf(k)
}

onMounted(() => {
  cards = Array.from(rail.value.querySelectorAll('.pc'))
  measure()
  x = tx = centerOf(N)
  io = new IntersectionObserver(
    (entries) => {
      inView = entries[0].isIntersecting
      if (inView && !raf) frame()
    },
    { rootMargin: '250px' },
  )
  io.observe(car.value)
  document.addEventListener('keydown', onKey)
  window.addEventListener('resize', recenter)
  window.addEventListener('load', recenter)
})

onBeforeUnmount(() => {
  io && io.disconnect()
  cancelAnimationFrame(raf)
  document.removeEventListener('keydown', onKey)
  window.removeEventListener('resize', recenter)
  window.removeEventListener('load', recenter)
})
</script>

<template>
  <div
    id="car"
    ref="car"
    class="car"
    tabindex="0"
    role="region"
    aria-roledescription="carousel"
    aria-label="Featured projects"
    @pointerdown="onPointerDown"
    @dragstart.prevent
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerUp"
    @mouseenter="car.classList.add('hv')"
    @mouseleave="car.classList.remove('hv')"
  >
    <div id="rail" ref="rail" class="rail" @click.capture="onRailClick">
      <template v-for="c in copies" :key="c">
        <article v-for="(p, i) in projects" :key="c + '-' + p.slug" class="pc" :data-k="i" :aria-label="p.title">
          <div class="pm">
            <img :src="asset(p.cover)" :alt="p.title + ' preview'" draggable="false" />
            <span class="pn">0{{ i + 1 }}</span>
          </div>
          <div class="pt">
            <span class="mono">{{ p.category }}</span>
            <h3>{{ p.title }}</h3>
            <p>{{ p.summary }}</p>
            <div class="tags"><span v-for="t in p.tags" :key="t">{{ t }}</span></div>
            <div class="pfoot">
              <span class="more">View case study <AppIcon name="arrow" /></span>
              <a v-if="p.live" class="lv" :href="p.live" target="_blank" rel="noopener">Live preview <AppIcon name="arrow" /></a>
            </div>
          </div>
        </article>
      </template>
    </div>
    <div id="dgb" ref="bubble" class="dgb" aria-hidden="true">Drag</div>
  </div>

  <div class="wrap">
    <div class="cc">
      <button id="pv" class="ib" type="button" aria-label="Previous project" @click="go(-1)">
        <AppIcon name="arrow" style="transform: rotate(-135deg)" />
      </button>
      <div class="cn">
        <b id="cnm" ref="label">{{ projects[current].title }}</b>
        <span id="cix">{{ current + 1 }} / {{ projects.length }}</span>
        <div class="cp"><i :style="{ width: ((current + 1) / projects.length) * 100 + '%' }" /></div>
      </div>
      <button id="nx" class="ib" type="button" aria-label="Next project" @click="go(1)">
        <AppIcon name="arrow" style="transform: rotate(45deg)" />
      </button>
    </div>
  </div>
</template>
