import React , { useState } from 'react';

function SearchInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const {value} = event.target;
    setInputValue(() => value);
  }

  return (
    <div className="search">
      <input
        className="search__search-input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button className="search__filter-button">A - Z</button>
      <button className="search__filter-button">Popular</button>
      <button className="search__filter-button">Trending</button>
    </div>
  );
}

export default SearchInput;