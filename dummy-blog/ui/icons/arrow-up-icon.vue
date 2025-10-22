<script setup lang="ts">
const props = defineProps<{ color?: string }>();
</script>

<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    :fill="props.color ?? 'currentColor'"
  >
    <path
      d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"
    ></path>
  </svg>
</template>
