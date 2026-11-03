<script setup>
import { toolGroups } from '../data/site.js'
import AppIcon from './AppIcon.vue'
import NextLink from './NextLink.vue'

// Move the soft highlight with the pointer.
function glow(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', e.clientX - r.left + 'px')
  el.style.setProperty('--my', e.clientY - r.top + 'px')
}
</script>

<template>
  <section id="tools" class="sec">
    <div class="wrap">
      <div class="sh" data-r>
        <h2><small>Stack</small>Tech Stack</h2>
        <p>
          The design tools, front-end frameworks, back-end services and workflow tools I use to take a project from
          wireframe to a working product.
        </p>
      </div>
      <div id="tg" class="tg">
        <div v-for="g in toolGroups" :key="g.name" class="trw">
          <h3 class="mono">{{ g.name }}</h3>
          <div class="tpl">
            <div v-for="[name, icon] in g.tools" :key="name" class="tp" @pointermove="glow">
              <AppIcon :name="icon" /><b>{{ name }}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NextLink to="about" label="About" />
  </section>
</template>
