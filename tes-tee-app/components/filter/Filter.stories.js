import React from 'react';
import Filter from './Filter';

export default {
  title: 'Filter',
  component: Filter,
};

export const standard = () => (
  <Filter filterColor={() => {}} filterSize={() => {}} />
);
