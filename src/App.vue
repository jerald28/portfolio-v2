<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import { ui } from './store.js'
import { marquees } from './data/site.js'
import { useActiveSection } from './composables/useActiveSection.js'
import { startAnimations, goTo, motionOn } from './composables/useAnimations.js'

import PageChrome from './components/PageChrome.vue'
import SiteHeader from './components/SiteHeader.vue'
import MobileMenu from './components/MobileMenu.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeStrip from './components/MarqueeStrip.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import StackSection from './components/StackSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import ProjectModal from './components/ProjectModal.vue'

useActiveSection()

// In-page links play the curtain transition instead of a plain jump.
function onAnchorClick(e) {
  const a = e.target.closest('a[href^="#"]')
  if (!a || a.closest('#md')) return
  const id = a.getAttribute('href').slice(1)
  if (!id) return
  e.preventDefault()
  ui.menuOpen = false
  goTo(id)
}

onMounted(() => {
  document.addEventListener('click', onAnchorClick, true)
  if (motionOn) nextTick(startAnimations)
})
onBeforeUnmount(() => document.removeEventListener('click', onAnchorClick, true))
</script>

<template>
  <PageChrome />
  <SiteHeader />
  <MobileMenu />
  <main id="top">
    <HeroSection />
    <MarqueeStrip id="mq1" :words="marquees.top" />
    <ProjectsSection />
    <ServicesSection />
    <ProcessSection />
    <StackSection />
    <AboutSection />
    <ExperienceSection />
    <FaqSection />
    <MarqueeStrip id="mq2" :words="marquees.bottom" />
    <ContactSection />
  </main>
  <ProjectModal />
</template>
