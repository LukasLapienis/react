import React from 'react';
import { Search } from './Search';
import { NavBar } from './NavBar';

export const Header = ({ searchFilterHandler, searchFilter }) => {
  return (
    <header className="header">
      <NavBar />
      <Search
        searchFilterHandler={searchFilterHandler}
        searchFilter={searchFilter}
      />
    </header>
  );
};
