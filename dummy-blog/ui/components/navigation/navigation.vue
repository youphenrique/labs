<script setup lang="ts">
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";

const route = useRoute();

const navLinks = [
  {
    route: "/",
    name: "Home",
    routeName: "index",
  },
  {
    route: "/about",
    name: "About",
    routeName: "about",
  },
  {
    route: "/guestbook",
    name: "Guestbook",
    routeName: "guestbook",
  },
  {
    route: "https://github.com/phenrique7/dummy-blog",
    name: "Source",
    routeName: "source",
  },
] as const;
</script>

<template>
  <nav>
    <ul
      :class="
        flex({
          gap: 4,
          textAlign: 'center',
          flexDirection: 'column',
          md: { gap: 2 },
        })
      "
    >
      <li v-for="navLink in navLinks" :key="navLink.name">
        <NuxtLink
          :to="navLink.route"
          :class="
            css({
              fontSize: 'xl',
              fontWeight:
                route.name === navLink.routeName ? 'medium' : 'normal',
              color:
                route.name === navLink.routeName
                  ? 'highlight'
                  : 'text_main',
              '&:hover': {
                textDecoration: 'underline',
              },
              md: { fontSize: 'md' },
            })
          "
        >
          {{ navLink.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
