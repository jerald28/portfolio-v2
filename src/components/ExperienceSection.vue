<script setup>
import { experience } from '../data/site.js'
import NextLink from './NextLink.vue'
</script>

<template>
  <section id="experience" class="sec">
    <div class="wrap">
      <div class="sh" data-r>
        <h2><small>Experience</small>Experience</h2>
        <p>Where I moved from designing interfaces to building them.</p>
      </div>
      <div
        v-for="(e, i) in experience"
        :key="e.title"
        class="ex"
        data-r
        :style="i === experience.length - 1 ? 'border-bottom:1px solid var(--line)' : ''"
      >
        <div class="d">{{ e.date }}</div>
        <div>
          <h3>{{ e.title }}</h3>
          <p>{{ e.text }}</p>
          <div v-if="e.tags.length" class="tags"><span v-for="t in e.tags" :key="t">{{ t }}</span></div>
        </div>
      </div>
    </div>
    <NextLink to="faq" label="Questions" />
  </section>
</template>
