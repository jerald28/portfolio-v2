<script setup>
import { services } from '../data/site.js'
import AppIcon from './AppIcon.vue'
import NextLink from './NextLink.vue'
</script>

<template>
  <section id="services" class="sec">
    <div class="wrap">
      <div class="sh" data-r>
        <h2><small>Services</small>What I do</h2>
        <p>From the first wireframe to the finished page, I can cover the design and the front-end build.</p>
      </div>
      <div id="sv" class="sv">
        <article v-for="(s, i) in services" :key="s.title" class="sc">
          <div class="top">
            <AppIcon :name="s.icon" /><span class="no">0{{ i + 1 }}</span>
          </div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
          <ul>
            <li v-for="item in s.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
    <NextLink to="process" label="Process" />
  </section>
</template>
