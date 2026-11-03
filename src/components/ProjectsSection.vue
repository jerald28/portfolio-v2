<script setup>
import ProjectsCarousel from './ProjectsCarousel.vue'
import NextLink from './NextLink.vue'
</script>

<template>
  <section id="projects" class="sec">
    <div class="wrap">
      <div class="sh" data-r>
        <h2><small>Projects</small>Selected work</h2>
        <p>
          Web applications and platforms I designed in Figma and built on the front end, from first wireframe to
          working product.
        </p>
      </div>
      <p class="mono hint" data-r>Drag or use the arrow keys · Select a card for details</p>
    </div>
    <ProjectsCarousel />
    <div class="wrap">
      <p class="inl" data-r>Have something similar in mind? <a href="#contact">Let’s talk about it</a></p>
    </div>
    <NextLink to="services" label="Services" />
  </section>
</template>
