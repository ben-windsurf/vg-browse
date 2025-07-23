# StubHub Homepage Clone

A React-based replica of the StubHub homepage, featuring a modern ticketing platform interface with event browsing, search functionality, and user authentication.

## Project Overview

This project recreates the StubHub homepage experience with pixel-perfect design matching, including:
- Interactive event search and filtering
- Trending events carousel
- User authentication flow
- Responsive design with StubHub branding

## Features

### 🎫 Homepage (`/`)
- **Header Navigation**: Complete navigation bar with StubHub logo and menu categories
- **Search Interface**: Centralized search bar with location and date filters
- **Category Filtering**: Interactive buttons for Sports, Concerts, Theater & Comedy
- **Trending Events**: Horizontal scrolling carousel showcasing popular events
- **Event Cards**: Detailed cards with artist images, rankings, dates, and venues

### 🔐 Authentication (`/login`)
- User login interface
- Form validation and user experience

## Project Structure

```
src/
├── App.js              # Main application with routing configuration
├── Landing.js          # Homepage component with search and events
├── Login.js            # Authentication page component
├── App.css             # Global styles and component-specific CSS
├── index.js            # React application entry point
└── assets/             # Static resources
    ├── artists/        # Artist and performer images
    ├── icons/          # UI icons and symbols
    └── logos/          # Brand logos and graphics
```

## Technology Stack

- **Frontend Framework**: React 19.1.0
- **Routing**: React Router DOM 7.7.0
- **Styling**: Custom CSS with modern design patterns
- **Build Tool**: Create React App
- **Testing**: Jest with React Testing Library

## Component Schema

### Landing Component
```javascript
// Main homepage structure
<div className="landing-page">
  <header>                    // Top navigation and branding
    <div className="disclaimer">  // Pricing notice bar
    <nav className="navbar">      // Main navigation menu
  </header>
  
  <main>
    <section className="search-section">     // Search and filters
    <section className="trending-events">   // Event carousel
  </main>
</div>
```

### Key Data Structures

**Event Object Schema**:
```javascript
{
  id: number,
  rank: number,
  name: string,
  date: string,
  time: string,
  venue: string,
  image: string,
  isFavorite: boolean
}
```

**Navigation Categories**:
- Sports
- Concerts  
- Theater
- Festivals
- Top Cities

## Styling Architecture

### Design System
- **Primary Color**: `#6f42c1` (StubHub Purple)
- **Typography**: Modern sans-serif font stack
- **Layout**: Flexbox and CSS Grid for responsive design
- **Components**: Card-based design with hover effects
- **Interactions**: Smooth transitions and micro-animations

### CSS Organization
```css
/* Global styles and resets */
.landing-page { ... }

/* Header components */
.disclaimer-bar { ... }
.navbar { ... }

/* Search interface */
.search-section { ... }
.filter-bar { ... }

/* Event carousel */
.trending-events { ... }
.event-card { ... }
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd browse-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application

### Available Scripts

- `npm start` - Runs the development server
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## Development Notes

### Routing Configuration
The application uses React Router for navigation:
- `/` - Landing page (homepage)
- `/login` - Authentication page

### Asset Management
Static assets are organized in the `src/assets/` directory:
- Artist images for event cards
- UI icons for navigation and interactions
- Brand logos and graphics

### Responsive Design
The application is built with mobile-first responsive design principles, ensuring optimal viewing across desktop, tablet, and mobile devices.

## Future Enhancements

- Event detail pages
- Ticket purchasing flow
- User profile management
- Advanced search filters
- Real-time event data integration
- Payment processing

## Contributing

When contributing to this project, please:
1. Follow the existing code style and structure
2. Maintain the StubHub design consistency
3. Test across different screen sizes
4. Update documentation as needed

## License

This project is for educational and demonstration purposes.
