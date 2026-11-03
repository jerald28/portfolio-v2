<script setup>
import { ref, watch, nextTick } from 'vue'
import { ui, asset } from '../store.js'
import { menuLinks, contact } from '../data/site.js'
import { gsap, motionOn } from '../composables/useAnimations.js'
import AppIcon from './AppIcon.vue'

const panel = ref(null)

watch(
  () => ui.menuOpen,
  (open) => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    if (open && motionOn)
      nextTick(() =>
        gsap.from(panel.value.querySelectorAll('a'), { y: 60, opacity: 0, stagger: 0.07, duration: 0.6, ease: 'power3.out' }),
      )
  },
)
</script>

<template>
  <div id="mn" ref="panel" :class="{ open: ui.menuOpen }" role="dialog" aria-label="Menu">
    <button id="mx2" class="x ib" type="button" aria-label="Close menu" @click="ui.menuOpen = false">
      <AppIcon name="x" />
    </button>
    <a v-for="l in menuLinks" :key="l.id" :href="'#' + l.id" @click="ui.menuOpen = false">{{ l.label }}</a>
    <a :href="asset(contact.cv)" download="Jerald_Esguerra_CV.pdf" data-cv @click="ui.menuOpen = false"
      ><span>Download CV</span></a
    >
  </div>
</template>
