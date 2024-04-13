import React from 'react';
import { Search } from './Search';
import { NavBar } from './NavBar';

export const Header = ({
  searchFilterHandler,
  searchFiltered,
  regionFilterHandler,
}) => {
  return (
    <header className="header">
      <NavBar regionFilterHandler={regionFilterHandler} />
      <Search
        searchFilterHandler={searchFilterHandler}
        searchFiltered={searchFiltered}
      />
    </header>
  );
};
