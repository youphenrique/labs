import React from 'react';
import Header from './Header';
import Search from '../search/Search';

export default {
  title: 'Header',
  component: Header,
};

export const standard = () => {
  const [search, setSearch] = React.useState('');

  return (
    <Header
      onMenuClick={() => {}}
      onSearchClick={() => {}}
      onCartClick={() => {}}
    >
      <Search
        value={search}
        onChange={value => {
          setSearch(value);
        }}
      />
    </Header>
  );
};
