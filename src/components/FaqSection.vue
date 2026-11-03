<script setup>
import { ref } from 'vue'
import { faq } from '../data/site.js'
import AppIcon from './AppIcon.vue'
import NextLink from './NextLink.vue'

const open = ref(0) // index of the open answer, or -1 for none
const selected = ref(0) // highlighted question in the side list

function toggle(i) {
  open.value = open.value === i ? -1 : i
  selected.value = i
}
</script>

<template>
  <section id="faq" class="sec">
    <div class="wrap">
      <div class="sh" data-r>
        <h2><small>Questions</small>Questions</h2>
        <p>Quick answers about where I’m based, what I do and how to reach me.</p>
      </div>
      <div class="fq">
        <ol id="fl" aria-hidden="true">
          <li v-for="(q, i) in faq" :key="i">
            <button type="button" :data-q="i" :class="{ on: selected === i }" tabindex="-1" @click="toggle(i)">
              <span>0{{ i + 1 }}</span>{{ q[0] }}
            </button>
          </li>
        </ol>
        <div id="fa" data-r>
          <div v-for="(q, i) in faq" :key="i" class="qa" :class="{ open: open === i }">
            <button type="button" :aria-expanded="open === i ? 'true' : 'false'" @click="toggle(i)">
              <span>{{ q[0] }}</span><AppIcon name="plus" />
            </button>
            <div class="a">
              <div><p>{{ q[1] }}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NextLink to="contact" label="Contact" />
  </section>
</template>
