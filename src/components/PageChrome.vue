<script setup>
import { ui } from '../store.js'
import { sections } from '../data/site.js'
</script>

<template>
  <!-- Curtain shown while jumping between sections -->
  <div id="cu" aria-hidden="true">
    <i /><i /><i /><i /><i />
    <div id="cl" />
  </div>

  <!-- Side dots: where you are on the page -->
  <nav id="dots" class="dots" aria-label="Sections">
    <a
      v-for="s in sections"
      :key="s.id"
      :href="'#' + s.id"
      :data-d="s.id"
      :aria-label="s.label"
      :class="{ on: ui.activeId === s.id }"
      ><span>{{ s.label }}</span><i
    /></a>
  </nav>

  <!-- Intro loader (only shown when motion is on) -->
  <div id="ld" class="ld" aria-hidden="true">
    <span>Jerald Esguerra — Portfolio</span><b id="lc">0</b>
  </div>
</template>
