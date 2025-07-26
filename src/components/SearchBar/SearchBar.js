import React from 'react';
import './SearchBar.css';

const SearchBar = ({ themeColor = '#6f42c1', searchIcon, placeholder = "Search events, artists, teams, and more" }) => {
  return (
    <div className="search-bar">
      <img src={searchIcon} alt="Search" className="search-icon" />
      <input 
        type="text" 
        placeholder={placeholder}
        className="search-input"
        style={{ '--theme-color': themeColor }}
      />
    </div>
  );
};

export default SearchBar;
