import React from 'react';

export const Search = ({ searchFiltered, searchFilterHandler }) => {
  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="search"
        value={searchFiltered}
        onChange={searchFilterHandler}
      />
    </div>
  );
};
