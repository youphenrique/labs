/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import * as React from 'react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
  decorators: [
    (storyFn: () => React.ReactNode) => <Box p={2}>{storyFn()}</Box>,
  ],
};

export const hearts = () => <Card suit="H" value="10" />;

export const diamonds = () => <Card suit="D" value="A" />;

export const clubs = () => <Card suit="C" value="6" />;

export const spades = () => <Card suit="S" value="2" />;
