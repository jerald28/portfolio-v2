<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { gsap, motionOn } from '../composables/useAnimations.js'

defineProps({
  id: { type: String, required: true },
  words: { type: Array, required: true },
})

// The word set is repeated until one half of the strip is wider than the screen,
// then the whole half is duplicated so moving it -50% loops with no visible seam.
const reps = ref(1)
const track = ref(null)
let tween = null
let lastWidth = 0
let timer = 0

async function build() {
  const el = track.value
  if (!el) return
  lastWidth = window.innerWidth
  reps.value = 1
  await nextTick()
  const setWidth = el.offsetWidth / 2 || 1
  reps.value = Math.max(1, Math.ceil((window.innerWidth * 1.15) / setWidth))
  await nextTick()
  if (!motionOn) return
  if (tween) tween.kill()
  gsap.set(el, { xPercent: 0 })
  tween = gsap.to(el, { xPercent: -50, duration: (setWidth * reps.value) / 85, ease: 'none', repeat: -1 })
}

function onResize() {
  if (window.innerWidth === lastWidth) return
  clearTimeout(timer)
  timer = setTimeout(build, 200)
}

onMounted(() => {
  build()
  window.addEventListener('resize', onResize)
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(build)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  clearTimeout(timer)
  if (tween) tween.kill()
})
</script>

<template>
  <div class="mq" aria-hidden="true">
    <div :id="id" ref="track">
      <template v-for="half in 2" :key="half">
        <template v-for="r in reps" :key="half + '-' + r">
          <template v-for="w in words" :key="w"><span>{{ w }}</span><i>✦</i></template>
        </template>
      </template>
    </div>
  </div>
</template>
