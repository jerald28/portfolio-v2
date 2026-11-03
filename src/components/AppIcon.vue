<script setup>
import { computed } from 'vue'
import { ICONS } from '../data/icons.js'

const props = defineProps({ name: { type: String, required: true } })
const icon = computed(() => ICONS[props.name] || ICONS.wire)
</script>

<template>
  <svg
    class="ic"
    :class="{ st: icon[1] }"
    viewBox="0 0 24 24"
    aria-hidden="true"
    v-html="icon[0]"
  />
</template>
