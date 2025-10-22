<script setup lang="ts">
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import MenuIcon from "~/ui/icons/menu-icon.vue";
import CloseIcon from "~/ui/icons/close-icon.vue";
import Navigation from "~/ui/components/navigation/navigation.vue";
import IconButton from "~/ui/components/icon-button/icon-button.vue";
import SocialNetworks from "~/ui/components/social-networks/social-networks.vue";

const dialog = reactive({ open: false, preClosed: false });
const route = useRoute();

useHead(() => ({
  htmlAttrs: {
    ...(dialog.open && { style: "overflow: hidden" }),
  },
}));

function onCloseDialog() {
  dialog.preClosed = true;
  setTimeout(() => {
    dialog.open = false;
  }, 300);
}

watch(
  () => route.path,
  () => {
    if (dialog.open) {
      onCloseDialog();
    }
  },
);
</script>

<template>
  <aside
    :class="
      flex({
        px: 6,
        py: 3,
        zIndex: 1,
        width: '100%',
        height: 'auto',
        position: 'fixed',
        textAlign: 'center',
        borderRight: 'none',
        flexDirection: 'column',
        alignItems: 'flex-start',
        background: 'medium_background',
        md: {
          width: 80,
          padding: 8,
          height: '100dvh',
          alignItems: 'center',
          borderRight: '1px solid',
          borderRightColor: 'borders',
        },
      })
    "
  >
    <div
      :class="
        flex({
          width: '100%',
          alignItems: 'center',
          md: { width: 'auto' },
          justify: 'space-between',
        })
      "
    >
      <NuxtLink
        to="/"
        :class="
          flex({
            gap: 2,
            alignItems: 'center',
            md: { gap: 3, flexDirection: 'column' },
          })
        "
      >
        <div
          :class="css({ w: 9, h: 9, md: { mx: 'auto', w: 24, h: 24 } })"
        >
          <NuxtImg
            alt="Paulo Henrique's avatar"
            src="/images/notion-avatar.png"
            :class="
              css({
                borderRadius: 'full',
                outline: '1px solid rgba(0, 0, 0, 0.08)',
              })
            "
          />
        </div>
        <div
          :class="
            flex({
              flexDirection: 'column',
              alignItems: 'flex-start',
              md: { alignItems: 'center' },
            })
          "
        >
          <h1
            :class="
              css({
                mt: 0.5,
                lineHeight: 1,
                fontSize: 'sm',
                color: 'text_main',
                fontWeight: 'semibold',
                md: {
                  mt: 0,
                  ml: 0,
                  fontSize: '2xl',
                  lineHeight: 'normal',
                },
              })
            "
          >
            Alexander Maxwell
          </h1>
          <small
            :class="
              css({
                mt: 0.5,
                fontSize: 'sm',
                color: 'text_muted',
                fontWeight: 'medium',
                md: { mt: 0, fontSize: 'md' },
              })
            "
          >
            Software Engineer
          </small>
        </div>
      </NuxtLink>
      <IconButton
        variant="ghost"
        :overrides="{ root: css.raw({ hideFrom: 'md' }) }"
      >
        <MenuIcon
          color="var(--colors-text_main)"
          @click="
            dialog.preClosed = false;
            dialog.open = true;
          "
        />
      </IconButton>
    </div>
    <p
      :class="
        css({
          mt: 6,
          fontSize: 'sm',
          hideBelow: 'md',
          lineHeight: '1.3',
          color: 'text_muted',
        })
      "
    >
      A dummy blog about software engineering and other random stuff.
    </p>
    <div
      :class="
        css({
          my: 10,
          width: 16,
          height: '1px',
          hideBelow: 'md',
          bgColor: 'text_muted',
        })
      "
    />
    <div :class="css({ hideBelow: 'md' })">
      <Navigation />
    </div>
    <div
      :class="
        css({
          flex: 1,
          mx: 'auto',
          width: '100%',
          hideBelow: 'md',
          alignContent: 'end',
        })
      "
    >
      <SocialNetworks />
    </div>
  </aside>
  <Teleport to="#teleports">
    <div
      v-if="dialog.open"
      :class="
        flex({
          width: '100%',
          hideFrom: 'md',
          height: '100dvh',
        })
      "
    >
      <div
        @click="onCloseDialog"
        v-bind="{ [`data-${dialog.preClosed ? 'closed' : 'open'}`]: '' }"
        :class="
          css({
            top: 0,
            left: 0,
            zIndex: 3,
            width: '100%',
            height: '100%',
            position: 'fixed',
            background: 'backdrop',
            backdropFilter: 'blur(4px)',
            _open: {
              animationDuration: '0.3s',
              animationName: 'backdrop-appearance',
            },
            _closed: {
              animationDuration: '0.3s',
              animationName: 'backdrop-disappearance',
            },
          })
        "
      />
      <div
        v-bind="{ [`data-${dialog.preClosed ? 'closed' : 'open'}`]: '' }"
        :class="
          flex({
            p: 6,
            bottom: 0,
            zIndex: 3,
            height: '80%',
            width: '100vw',
            position: 'fixed',
            flexDirection: 'column',
            borderTopLeftRadius: 'lg',
            borderTopRightRadius: 'lg',
            justifyContent: 'space-between',
            background: 'medium_background',
            _open: {
              animationDuration: '0.3s',
              animationName: 'dialog-appearance',
            },
            _closed: {
              animationDuration: '0.3s',
              animationName: 'dialog-disappearance',
            },
          })
        "
      >
        <div
          :class="
            flex({ justifyContent: 'flex-end', alignItems: 'center' })
          "
        >
          <IconButton @click="onCloseDialog" variant="ghost">
            <CloseIcon color="var(--colors-text_main)" />
          </IconButton>
        </div>
        <Navigation />
        <SocialNetworks />
      </div>
    </div>
  </Teleport>
</template>
