<script setup>
import { about } from '../data/site.js'
import NextLink from './NextLink.vue'

const words = about.statement.split(' ')
</script>

<template>
  <section id="about" class="sec">
    <div class="wrap">
      <div class="sh" data-r>
        <h2><small>About</small>Who I am</h2>
      </div>
      <p id="bg" class="big">
        <template v-for="(w, i) in words" :key="i"><span class="w">{{ w }}</span> </template>
      </p>
      <div class="facts" data-r>
        <div v-for="f in about.facts" :key="f.label">
          <b :data-count="f.value" :data-suf="f.suffix">{{ f.value }}{{ f.suffix }}</b><span>{{ f.label }}</span>
        </div>
      </div>
    </div>
    <NextLink to="experience" label="Experience" />
  </section>
</template>
