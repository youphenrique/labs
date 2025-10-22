import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const standard = () => <Button>Default</Button>;

export const primaryLightest = () => (
  <Button bg="primaryLightest">Primary Lightest</Button>
);

export const primaryLighter = () => (
  <Button bg="primaryLighter">Primary Lighter</Button>
);

export const primaryLight = () => (
  <Button bg="primaryLight">Primary Light</Button>
);

export const primaryRegular = () => (
  <Button bg="primaryRegular" color="primaryLightest">
    Primary Regular
  </Button>
);

export const primaryDark = () => (
  <Button bg="primaryDark" color="primaryLightest">
    Primary Dark
  </Button>
);

export const primaryDarker = () => (
  <Button bg="primaryDarker" color="primaryLightest">
    Primary Darker
  </Button>
);

export const outlined = () => <Button outlined>Outlined</Button>;

export const fullWidth = () => <Button fullWidth>Full Width</Button>;

export const disabled = () => (
  <Button bg="primaryRegular" color="primaryLightest" disabled>
    Disabled
  </Button>
);
