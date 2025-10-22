<script setup lang="ts">
import { css, type Styles } from "styled-system/css";
import { iconButtonSva } from "~/ui/components/icon-button/icon-button.sva";

const props = defineProps<{
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "ghost";
  overrides?: { root?: Styles; icon?: Styles };
}>();

const { size, variant, overrides, ...other } = props;
const styles = iconButtonSva.raw({ size, variant });
</script>

<template>
  <button :class="css(styles.root, overrides?.root)" v-bind="other">
    <span :class="css(styles.icon, overrides?.icon)">
      <slot></slot>
    </span>
  </button>
</template>
