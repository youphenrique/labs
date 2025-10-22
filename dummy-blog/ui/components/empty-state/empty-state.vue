<script setup lang="ts">
import { css } from "styled-system/css";
import { vstack } from "styled-system/patterns";
</script>

<template>
  <div :class="vstack({ alignItems: 'center', gap: 2, mt: 20 })">
    <svg
      fill="none"
      viewBox="0 0 64 64"
      stroke-width="2"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :class="css({ width: 12, md: { width: 16 } })"
    >
      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="4"
        ry="4"
        fill="#E0E0E0"
      />
      <line
        x1="16"
        y1="20"
        x2="48"
        y2="20"
        stroke="#888"
        stroke-width="2"
      />
      <line
        x1="16"
        y1="28"
        x2="40"
        y2="28"
        stroke="#888"
        stroke-width="2"
      />
      <line
        x1="16"
        y1="36"
        x2="32"
        y2="36"
        stroke="#888"
        stroke-width="2"
      />
      <path d="M48 44l4 4-8 8h-4v-4l8-8z" fill="#888" />
    </svg>
    <h1
      :class="
        css({ fontSize: 'lg', color: 'text_main', fontWeight: 'semibold' })
      "
    >
      No blog posts yet
    </h1>
    <p
      :class="
        css({ fontSize: 'sm', color: 'text_muted', fontWeight: 'medium' })
      "
    >
      Check back soon for updates!
    </p>
  </div>
</template>
