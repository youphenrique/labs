<script setup lang="ts">
import { css } from "styled-system/css";

const props = defineProps<{ color?: string }>();
</script>

<template>
  <svg
    width="25"
    height="16"
    fill="none"
    viewBox="0 0 25 16"
    xmlns="http://www.w3.org/2000/svg"
    :class="css({ transform: 'rotateY(3.142rad)' })"
  >
    <path
      d="M1 1H24"
      stroke-width="1.5"
      stroke-linecap="round"
      :stroke="props.color ?? 'currentColor'"
    ></path>
    <path
      d="M1 8H14.8868"
      stroke-width="1.5"
      stroke-linecap="round"
      :stroke="props.color ?? 'currentColor'"
    ></path>
    <path
      d="M1 15H21.8302"
      stroke-width="1.5"
      stroke-linecap="round"
      :stroke="props.color ?? 'currentColor'"
    ></path>
  </svg>
</template>
