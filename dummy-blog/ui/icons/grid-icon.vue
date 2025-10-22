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
      d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"
    ></path>
  </svg>
</template>
