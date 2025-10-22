import { tailwind } from '@theme-ui/presets';

export default {
  ...tailwind,
  fonts: {
    ...tailwind.fonts,
    body:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  styles: {
    ...tailwind.styles,
    hr: {
      bg: 'muted',
      border: 0,
      height: '1px',
      my: 3,
      mx: 0,
    },
  },
  sizes: {
    ...tailwind.sizes,
    container: '1280px',
  },
  cards: {
    primary: {
      padding: 4,
      borderRadius: 4,
      boxShadow:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  forms: {
    label: {
      fontSize: 1,
    },
    input: {
      borderColor: 'gray.4',
      '&:focus': {
        borderColor: 'blue.3',
        boxShadow: '0 0 0 3px rgba(164, 202, 254, .45)',
        outline: 'none',
      },
    },
  },
};
