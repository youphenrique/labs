<script setup lang="ts">
import { css } from "styled-system/css";
import { flex, vstack } from "styled-system/patterns";

const { display = "list", post } = defineProps<{
  display?: "list" | "grid";
  post: {
    id: string;
    date: string;
    path: string;
    title: string;
    category: string;
    background: string;
    description: string;
  };
}>();

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<template>
  <NuxtLink
    :to="post.path"
    :class="
      flex({
        p: 6,
        gap: 1.5,
        w: 'fit-content',
        flexDirection: 'column',
        alignItems: 'flex-start',
        '&:hover :is(time, h1, p)': { color: 'highlight' },
        md: {
          py: 8,
          px: 10,
          gap: 6,
          w: display === 'list' ? 'fit-content' : '100%',
          flexDirection: display === 'list' ? 'row' : 'column',
          alignItems: display === 'list' ? 'center' : 'stretch',
        },
      })
    "
  >
    <div
      :style="{ backgroundColor: post.background }"
      :class="
        flex({
          px: 1.5,
          py: 0.5,
          w: 'auto',
          h: 'auto',
          fontSize: 'xs',
          color: 'db_white',
          borderRadius: 'sm',
          fontWeight: 'bold',
          alignItems: 'center',
          justifyContent: 'center',
          textTransform: 'uppercase',
          md: {
            p: 0,
            w: 20,
            h: 20,
            mx: 'auto',
            fontSize: 'md',
            borderRadius: 'full',
          },
        })
      "
    >
      {{ post.category }}
    </div>
    <div
      :class="
        vstack({
          gap: 0,
          justifyContent: 'space-around',
          textAlign: display === 'list' ? 'left' : 'center',
          alignItems: display === 'list' ? 'flex-start' : 'center',
        })
      "
    >
      <time
        :class="
          css({
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'text_secondary',
          })
        "
      >
        {{ formatDate(post.date) }}
      </time>
      <h1
        :class="
          css({
            fontSize: 'xl',
            lineHeight: '1.3',
            fontWeight: 'bold',
            color: 'text_main',
          })
        "
      >
        {{ post.title }}
      </h1>
      <p
        :class="
          css({
            mt: 0.5,
            lineHeight: '1.2',
            color: 'text_muted',
            fontWeight: 'medium',
          })
        "
      >
        {{ post.description }}
      </p>
    </div>
  </NuxtLink>
</template>
