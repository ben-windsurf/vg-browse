import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '@ben-windsurf/component-library';
import '@ben-windsurf/component-library/dist/index.css';
import logo from './assets/logos/logo.png';
import profileIcon from './assets/icons/profile.png';
import searchIcon from './assets/icons/search.png';
import navigationIcon from './assets/icons/navigation.png';
import rufusImg from './assets/artists/rufus.png';
import billieImg from './assets/artists/billie.png';
import zachImg from './assets/artists/zach.png';
import gagaImg from './assets/artists/gaga.png';
import lumineersImg from './assets/artists/lumineers.png';
import wallenImg from './assets/artists/wallen.png';
import lordeImg from './assets/artists/lorde.png';
import creedImg from './assets/artists/creed.png';
import booneImg from './assets/artists/boone.png';
import disclosureImg from './assets/artists/disclosure.png';
import teddyImg from './assets/artists/teddy.png';
import duaImg from './assets/artists/dua.png';
import './App.css';

function Landing() {
  const [selectedCategory, setSelectedCategory] = useState('All types');
  
  const eventCards = [
    {
      id: 1,
      artist: 'Rufus Du Sol',
      image: rufusImg,
      date: 'Sat, Jul 26 • 8:00 PM',
      venue: 'Chase Center'
    },
    {
      id: 2,
      artist: 'Billie Eilish',
      image: billieImg,
      date: 'Sun, Aug 10 • 7:30 PM',
      venue: 'Oracle Park'
    },
    {
      id: 3,
      artist: 'Zach Bryan',
      image: zachImg,
      date: 'Fri, Sep 15 • 8:00 PM',
      venue: 'Shoreline Amphitheatre'
    },
    {
      id: 4,
      artist: 'Lady Gaga',
      image: gagaImg,
      date: 'Tue, Jul 22 • 8:00 PM',
      venue: 'Chase Center'
    },
    {
      id: 5,
      artist: 'Benson Boone',
      image: booneImg,
      date: 'Wed, Aug 20 • 7:00 PM',
      venue: 'Golden Gate Park'
    },
    {
      id: 6,
      artist: 'Disclosure',
      image: disclosureImg,
      date: 'Thu, Sep 5 • 9:00 PM',
      venue: 'The Warfield'
    }
  ];

  const recommendedCards = [
    {
      id: 1,
      artist: 'The Lumineers',
      image: lumineersImg,
      date: 'Aug 15 - Aug 18',
      venue: '1 event near you'
    },
    {
      id: 2,
      artist: 'Morgan Wallen',
      image: wallenImg,
      date: 'Nov 23 - Nov 24',
      venue: '2 events near you'
    },
    {
      id: 3,
      artist: 'Lorde',
      image: lordeImg,
      date: 'Jul 23 - Jul 27',
      venue: '3 events near you'
    },
    {
      id: 4,
      artist: 'Creed',
      image: creedImg,
      date: 'Aug 15 - Aug 17',
      venue: '1 event near you'
    },
    {
      id: 5,
      artist: 'Teddy Swims',
      image: teddyImg,
      date: 'Oct 12 - Oct 14',
      venue: '2 events near you'
    },
    {
      id: 6,
      artist: 'Dua Lipa',
      image: duaImg,
      date: 'Nov 3 - Nov 5',
      venue: '1 event near you'
    }
  ];

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="header-top">
          <p className="disclaimer">
            viagogo is the world's top destination for ticket buyers and resellers. Prices may be higher or lower than face value.
          </p>
        </div>
        
        <nav className="navbar">
          <div className="nav-left">
            <img src={logo} alt="viagogo" className="nav-logo" />
            <div className="nav-links">
              <button className="nav-link">Sports</button>
              <button className="nav-link">Concerts</button>
              <button className="nav-link">Theater</button>
              <button className="nav-link">Festivals</button>
            </div>
          </div>
          
          <div className="nav-right">
            <button className="nav-link">Explore</button>
            <button className="nav-link">Sell</button>
            <button className="nav-link">Favorites</button>
            <button className="nav-link">My Tickets</button>
            <Link to="/login" className="sign-in-nav">
              <span>Sign In</span>
              <img src={profileIcon} alt="Profile" className="profile-icon" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-container">
          <SearchBar 
            themeColor="#80a42c"
            searchIcon={searchIcon}
            placeholder="Search events, artists, teams, and more"
          />
        </div>
        
        {/* Filter Bar */}
        <div className="filter-bar">
          <div className="location-selector">
            <img src={navigationIcon} alt="Location" className="location-icon" />
            <span>San Francisco</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          
          <div className="date-selector">
            <span>All dates</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          
          <div className="category-filters">
            {['All types', 'Sports', 'Concerts', 'Theater & Comedy'].map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Events */}
      <div className="trending-section">
        <h2 className="section-title">Trending Events near San Jose</h2>
        
        <div className="events-carousel">
          {eventCards.map((event, index) => (
            <div key={event.id} className="event-card">
              <div className="event-number">#{index + 1}</div>
              <div className="event-image-container">
                <img src={event.image} alt={event.artist} className="event-image" />
                <button className="favorite-btn">♡</button>
              </div>
              <div className="event-info">
                <h3 className="event-title">{event.artist}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-venue">{event.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended For You */}
      <div className="recommended-section">
        <h2 className="section-title">Recommended for you</h2>
        
        <div className="events-carousel">
          {recommendedCards.map((event, index) => (
            <div key={event.id} className="event-card">
              <div className="event-image-container">
                <img src={event.image} alt={event.artist} className="event-image" />
                <button className="favorite-btn">♡</button>
              </div>
              <div className="event-info">
                <h3 className="event-title">{event.artist}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-venue">{event.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
