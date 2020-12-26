import React from 'react';

function Searchbar(props) {
  return (
    <div className="search">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.36 16.32" className="search__search-icon">
          <path d="M11.1,9.17l0,0a6,6,0,1,0-2,2l0,0,5.26,5.12,2.08-2ZM6,9.72A3.72,3.72,0,1,1,9.72,6,3.72,3.72,0,0,1,6,9.72Z" fill="#E83600" fillRule="evenodd"/>
        </svg>
        <input
          className="search__search-input"
          value={props.inputValue}
          onChange={props.handleChange}
          placeholder="Search for movies..."
        />
      </div>
    </div>
  );
}

export default Searchbar;