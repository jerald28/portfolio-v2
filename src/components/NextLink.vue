<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  to: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <div class="wrap">
    <a class="next" :href="'#' + to">Next · {{ label }} <AppIcon name="arrow" /></a>
  </div>
</template>
