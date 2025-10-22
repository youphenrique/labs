import React from 'react';
import IconButton from './IconButton';
import Hamburger from '../icons/Hamburger';

export default {
  title: 'IconButton',
  component: IconButton,
};

export const standard = () => (
  <IconButton onClick={() => {}} label="Menu">
    <Hamburger />
  </IconButton>
);

export const disabled = () => (
  <IconButton label="Menu" disabled>
    <Hamburger />
  </IconButton>
);
