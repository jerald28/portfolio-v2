<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { ui, asset } from '../store.js'
import { projects, ROLE } from '../data/projects.js'
import { gsap, motionOn } from '../composables/useAnimations.js'
import AppIcon from './AppIcon.vue'

const project = computed(() => (ui.modalIndex === null ? null : projects[ui.modalIndex]))
const desktopShots = computed(() => (project.value ? project.value.screenshots.filter((s) => !s.mobile) : []))
const mobileShots = computed(() => (project.value ? project.value.screenshots.filter((s) => s.mobile) : []))

const box = ref(null)
const body = ref(null)
const closeBtn = ref(null)
let lastFocus = null

function close() {
  ui.modalIndex = null
}

watch(
  () => ui.modalIndex,
  (i, prev) => {
    const open = i !== null
    document.documentElement.style.overflow = open ? 'hidden' : ''
    if (open) {
      if (prev === null) lastFocus = document.activeElement
      nextTick(() => {
        body.value.scrollTop = 0
        closeBtn.value.focus()
        if (motionOn)
          gsap.fromTo(box.value, { y: 40, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out' })
      })
    } else if (lastFocus && lastFocus.focus) {
      lastFocus.focus()
    }
  },
)

const onKey = (e) => {
  if (e.key === 'Escape') {
    close()
    ui.menuOpen = false
  }
}
onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <div
    id="md"
    :class="{ open: project }"
    role="dialog"
    aria-modal="true"
    aria-labelledby="mt"
    :aria-hidden="project ? 'false' : 'true'"
    @click.self="close"
  >
    <div ref="box" class="mw">
      <div class="mh">
        <span id="mt" class="mono">Case study {{ project ? '0' + (ui.modalIndex + 1) : '' }}</span>
        <button id="mx" ref="closeBtn" class="ib" type="button" aria-label="Close case study" @click="close">
          <AppIcon name="x" />
        </button>
      </div>
      <div id="mbd" ref="body" class="mb">
        <template v-if="project">
          <img :src="asset(project.cover)" :alt="project.title" />
          <h2>{{ project.title }}</h2>
          <p v-for="(t, i) in project.description" :key="i">{{ t }}</p>
          <h4>Role</h4>
          <p>{{ ROLE }}</p>
          <h4>Stack</h4>
          <div class="tags"><span v-for="t in project.tags" :key="t">{{ t }}</span></div>
          <h4>Key features</h4>
          <ul>
            <li v-for="f in project.features" :key="f">{{ f }}</li>
          </ul>
          <h4>Screenshots</h4>
          <figure v-for="(s, i) in desktopShots" :key="s.src">
            <figcaption>{{ s.caption }}</figcaption>
            <img loading="lazy" :src="asset(s.src)" :alt="project.title + ' screenshot ' + (i + 1)" />
          </figure>
          <div v-if="mobileShots.length" class="mob">
            <figure v-for="(s, i) in mobileShots" :key="s.src">
              <figcaption>{{ s.caption }}</figcaption>
              <img loading="lazy" :src="asset(s.src)" :alt="project.title + ' mobile screenshot ' + (i + 1)" />
            </figure>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
