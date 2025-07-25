import React from 'react';
import './SearchBar.css';

const themes = {
  purple: {
    primary: '#6f42c1',
    primaryHover: '#5a3fa8'
  },
  green: {
    primary: '#78a42c',
    primaryHover: '#6a8f26'
  }
};

const SearchBar = ({ 
  theme = 'purple',
  searchIcon,
  navigationIcon,
  location = 'San Francisco',
  selectedCategory = 'All types',
  onCategoryChange = () => {},
  categories = ['All types', 'Sports', 'Concerts', 'Theater & Comedy'],
  placeholder = "Search events, artists, teams, and more"
}) => {
  console.log('SearchBar props:', { theme, location, selectedCategory });
  const themeColors = themes[theme] || themes.purple;

  return (
    <div className="search-bar__section" style={{ '--theme-primary': themeColors.primary, '--theme-primary-hover': themeColors.primaryHover }}>
      <div className="search-bar__container">
        <div className="search-bar__bar">
          <img src={searchIcon} alt="Search" className="search-bar__icon" />
          <input 
            type="text" 
            placeholder={placeholder}
            className="search-bar__input"
          />
        </div>
      </div>
      
      <div className="search-bar__filter-bar">
        <div className="search-bar__location-selector">
          <img src={navigationIcon} alt="Location" className="search-bar__location-icon" />
          <span>{location}</span>
          <span className="search-bar__dropdown-arrow">▼</span>
        </div>
        
        <div className="search-bar__date-selector">
          <span>All dates</span>
          <span className="search-bar__dropdown-arrow">▼</span>
        </div>
        
        <div className="search-bar__category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`search-bar__filter-btn ${selectedCategory === category ? 'search-bar__filter-btn--active' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
