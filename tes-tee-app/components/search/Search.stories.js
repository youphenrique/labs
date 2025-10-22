import React from 'react';
import Search from './Search';

export default {
  title: 'Search',
  component: Search,
};

export const standard = () => {
  const [search, setSearch] = React.useState('');

  return (
    <Search
      value={search}
      onChange={value => {
        setSearch(value);
      }}
    />
  );
};

export const focused = () => {
  const [search, setSearch] = React.useState('');

  return (
    <Search
      value={search}
      onChange={value => {
        setSearch(value);
      }}
      focused
    />
  );
};
