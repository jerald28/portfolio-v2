<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { processSteps } from '../data/site.js'
import NextLink from './NextLink.vue'

const aiOn = ref(true)
const active = ref(0)
const list = ref(null)
let io

// Highlight the stage card sitting in the middle of the screen.
onMounted(() => {
  if (!('IntersectionObserver' in window)) return
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = +e.target.dataset.i
      })
    },
    { rootMargin: '-42% 0px -42% 0px' },
  )
  list.value.querySelectorAll('.ps').forEach((el) => io.observe(el))
})
onBeforeUnmount(() => io && io.disconnect())
</script>

<template>
  <section id="process" class="sec">
    <div class="wrap">
      <div class="pg">
        <aside class="pa">
          <div class="sh" data-r>
            <h2><small>Process</small>How a project comes together</h2>
            <p>Five stages from first conversation to launch. Switch AI assist on to see where I use it.</p>
          </div>
          <div class="sw">
            <button
              id="sb"
              type="button"
              role="switch"
              :aria-checked="aiOn ? 'true' : 'false'"
              aria-label="AI assist"
              @click="aiOn = !aiOn"
            />AI assist
          </div>
          <p id="pgs" class="mono" style="margin: 22px 0 10px">Stage 0{{ active + 1 }} / 0{{ processSteps.length }}</p>
          <div class="pbar"><i :style="{ width: ((active + 1) / processSteps.length) * 100 + '%' }" /></div>
        </aside>

        <ol id="pl" ref="list" class="pl" :class="{ 'ai-on': aiOn }">
          <li v-for="(s, i) in processSteps" :key="s.title" class="ps" :class="{ on: active === i }" :data-i="i">
            <span class="no">0{{ i + 1 }}</span>
            <div>
              <p class="mono">Stage 0{{ i + 1 }}</p>
              <h3>{{ s.title }}</h3>
              <p>{{ s.text }}</p>
              <ol class="dv">
                <li v-for="d in s.deliverables" :key="d">{{ d }}</li>
              </ol>
              <div class="row t"><span v-for="t in s.tools" :key="t">{{ t }}</span></div>
              <div class="an">
                <div>
                  <div class="aib"><b>How AI helps here</b>{{ s.ai }}</div>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
    <NextLink to="tools" label="Stack" />
  </section>
</template>
