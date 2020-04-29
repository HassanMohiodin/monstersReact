import React from 'react';

import './SearchBar.styles.css';

export const SearchBar = (props) => {
  return (
    <div>
      <input
        className="search-input"
        placeholder="Search Monster"
        type="search"
        onChange={props.getInput}
      />
    </div>
  );
};
