<script setup>
import { contact } from '../data/site.js'
import { asset } from '../store.js'
import { useCopyEmail } from '../composables/useCopy.js'
import AppIcon from './AppIcon.vue'

const { copied, copy } = useCopyEmail()
</script>

<template>
  <section id="contact" class="sec close">
    <div class="wrap" data-r>
      <p class="mono">Let’s work together</p>
      <h2><span class="hl">Got an idea?</span> <span class="hl">Let’s design it</span> <span class="hl">and <em>ship</em> it.</span></h2>
      <div class="cta">
        <button class="btn pri" type="button" data-copy data-mag @click="copy">
          <span>{{ copied ? 'Copied!' : 'Copy email' }}</span> <AppIcon name="copy" />
        </button>
        <a class="btn" :href="asset(contact.cv)" download="Jerald_Esguerra_CV.pdf" data-cv data-mag
          ><AppIcon name="download" /><span>Download CV</span></a
        >
      </div>
      <div class="cg">
        <div>
          <h4>Email</h4>
          <a :href="'mailto:' + contact.email">{{ contact.email }}</a>
        </div>
        <div>
          <h4>Phone</h4>
          <a :href="contact.phoneHref">{{ contact.phone }}</a>
        </div>
        <div>
          <h4>Location</h4>
          <span>{{ contact.location }}</span>
        </div>
        <div>
          <h4>Elsewhere</h4>
          <a :href="contact.linkedin" target="_blank" rel="noopener">LinkedIn</a><br />
          <a :href="contact.github" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
      <div class="fin">
        <span>© 2026 Jerald Esguerra · Designed in Figma, built in Vue</span>
        <a class="up" href="#top">Back to top <AppIcon name="arrow" style="transform: rotate(-45deg)" /></a>
      </div>
    </div>
  </section>
</template>
