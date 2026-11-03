<script setup>
import { contact } from '../data/site.js'
import { asset } from '../store.js'
import { useCopyEmail } from '../composables/useCopy.js'
import AppIcon from './AppIcon.vue'

const { copied, copy } = useCopyEmail()
const headline = 'Interfaces designed in Figma, built for the web.'.split(' ')
const nameLines = ['Jerald', 'Esguerra']
</script>

<template>
  <section class="hero">
    <div class="wrap">
      <div style="position: relative; display: inline-block">
        <button id="cp" class="mail" type="button" data-mag @click="copy">
          <span>Get in touch</span><b>{{ contact.email }}</b><span class="ib"><AppIcon name="copy" /></span>
        </button>
        <span id="ts" class="toast" :class="{ on: copied }" role="status">Copied to clipboard!</span>
      </div>

      <div class="hg">
        <div>
          <p class="mono" data-h>UI/UX Developer · San Juan City, Philippines</p>
          <h1 class="sp1" data-h style="margin-top: 16px">
            <span
              v-for="(w, i) in headline"
              :key="i"
              style="display: inline-block; overflow: hidden; vertical-align: top"
              ><span class="w" style="display: inline-block">{{ w }}&nbsp;</span></span
            >
          </h1>
          <p class="lead" data-h>
            I combine UI/UX design with front-end development to turn ideas and prototypes into clean,
            responsive, user-friendly web applications.
          </p>
          <div class="cta" data-h>
            <a class="btn pri" href="#projects" data-mag>View selected work <AppIcon name="arrow" /></a>
            <a class="btn" :href="'mailto:' + contact.email" data-mag>Get in touch</a>
          </div>
        </div>

        <div id="ph" class="ph">
          <div class="im">
            <img :src="asset('images/jerald.jpg')" alt="Portrait of Jerald Esguerra" width="640" height="853" />
          </div>
          <div class="sel" aria-hidden="true"><i /><i /><i /><i /><span class="dim">420 × 560</span></div>
          <span class="cur c1" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3l16 7-7 2.5L10.5 20z" /></svg><b>Design</b>
          </span>
          <span class="cur c2" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3l16 7-7 2.5L10.5 20z" /></svg><b>Code</b>
          </span>
        </div>
      </div>

      <h2 class="name" aria-label="Jerald Esguerra">
        <span v-for="line in nameLines" :key="line" class="ln"
          ><span v-for="(c, i) in line" :key="i" class="ch">{{ c }}</span></span
        >
      </h2>
      <p class="sub">
        Designing and building <em>clean, responsive</em> digital experiences with Figma, Vue, React, Nuxt and
        Tailwind CSS.
      </p>
      <div class="cta">
        <a class="btn pri" :href="'mailto:' + contact.email" data-mag>Start a conversation <AppIcon name="arrow" /></a>
        <a class="btn" :href="contact.linkedin" target="_blank" rel="noopener" data-mag><AppIcon name="linkedin" /> LinkedIn</a>
        <a class="btn" :href="contact.github" target="_blank" rel="noopener" data-mag><AppIcon name="github" /> GitHub</a>
        <a class="btn" :href="asset(contact.cv)" download="Jerald_Esguerra_CV.pdf" data-cv data-mag
          ><AppIcon name="download" /><span>Download CV</span></a
        >
      </div>
      <div class="stats">
        <div><b data-count="4" data-suf="+">4+</b><span>Years of experience</span></div>
        <div><b>BSIS</b><span>Batch 2022, BS Information System</span></div>
        <div><b>San Juan</b><span>City, Metro Manila, Philippines</span></div>
      </div>
    </div>
  </section>
</template>
