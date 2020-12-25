import React from 'react';

function Searchbar(props) {
  return (
    <div className="search">
      <input
        className="search__search-input"
        value={props.inputValue}
        onChange={props.handleChange}
        placeholder="Search..."
      />
    </div>
  );
}

export default Searchbar;