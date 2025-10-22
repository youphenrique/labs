/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import Slider from './Slider';
import Card from '../card/Card';
import Layout from '../layout/Layout';

export default {
  title: 'Slider',
  component: Slider,
  decorators: [
    (storyFn: () => React.ReactNode) => <Layout>{storyFn()}</Layout>,
  ],
};

export const standard = () => (
  <Slider>
    <Card suit="H" value="10" />
    <Card suit="D" value="A" />
    <Card suit="C" value="6" />
    <Card suit="S" value="2" />
    <Card suit="C" value="9" />
    <Card suit="C" value="6" />
    <Card suit="D" value="3" />
    <Card suit="S" value="K" />
    <Card suit="H" value="1" />
    <Card suit="H" value="J" />
    <Card suit="S" value="10" />
  </Slider>
);
