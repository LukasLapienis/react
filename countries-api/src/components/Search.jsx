import React from 'react';

export const Search = ({ searchFilter, searchFilterHandler }) => {
  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="search"
        value={searchFilter}
        onChange={searchFilterHandler}
      />
    </div>
  );
};
