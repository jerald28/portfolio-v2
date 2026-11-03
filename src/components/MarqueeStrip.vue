<script setup>
defineProps({
  id: { type: String, required: true },
  words: { type: Array, required: true },
})
</script>

<template>
  <!-- Words are listed twice so the loop can scroll seamlessly -->
  <div class="mq" aria-hidden="true">
    <div :id="id">
      <template v-for="pass in 2" :key="pass">
        <template v-for="w in words" :key="pass + w"><span>{{ w }}</span><i>✦</i></template>
      </template>
    </div>
  </div>
</template>
