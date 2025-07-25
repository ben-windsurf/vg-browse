# StubHub Clone

A full-stack application featuring a React frontend that replicates the StubHub homepage and a FastAPI backend with JWT authentication and event endpoints.

## Project Overview

This project recreates the StubHub experience with:
- Interactive event search and filtering
- Trending events carousel
- User authentication flow
- Responsive design with StubHub branding
- FastAPI backend with JWT authentication
- SQLite database for user management

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

### Frontend
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

### Backend
```
backend/
├── Data/               # Database files directory
│   ├── user_data.db    # User authentication database
│   └── event_data.db   # Events information database
├── database.py         # Database models and connections
├── init_db.py          # Database initialization script
├── main.py             # Main FastAPI application
├── requirements.txt    # Python dependencies
└── test_api.py         # API testing script
```

## Technology Stack

### Frontend
- **Framework**: React 19.1.0
- **Routing**: React Router DOM 7.7.0
- **Styling**: Custom CSS with modern design patterns
- **Build Tool**: Create React App
- **Testing**: Jest with React Testing Library

### Backend
- **Framework**: FastAPI
- **Authentication**: JWT tokens
- **Database**: Dual SQLite databases with SQLAlchemy ORM
  - `user_data.db`: User authentication data
  - `event_data.db`: Event information
- **Password Hashing**: bcrypt
- **API Documentation**: Swagger UI and ReDoc

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
- Python 3.11 or higher
- pip package manager

### Frontend Installation

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

### Frontend Scripts

- `npm start` - Runs the development server
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

### Backend Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Initialize the database (optional - will be done automatically when starting the server):
```bash
python3 init_db.py
```

4. Run the server:
```bash
uvicorn main:app --reload
```

5. The API will be available at [http://localhost:8000](http://localhost:8000) with interactive documentation at [http://localhost:8000/docs](http://localhost:8000/docs)

### Database Structure

The application uses two separate SQLite databases stored in the `Data/` directory:

- `user_data.db`: Stores user authentication information
  - Contains the `users` table with email and hashed passwords

- `event_data.db`: Stores event information
  - Contains the `events` table with artist, venue, date, and image data

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

## API Endpoints

### Authentication
- `POST /auth/signup` - Create new user account
- `POST /auth/login` - Login and get JWT token

### Events
- `GET /events` - Get all events (public)
- `GET /events/protected` - Get events (requires authentication)

### Documentation
- `GET /docs` - Interactive API documentation (Swagger UI)
- `GET /redoc` - Alternative API documentation

## Example API Usage

### Signup
```bash
curl -X POST "http://localhost:8000/auth/signup" \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

### Login
```bash
curl -X POST "http://localhost:8000/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

### Get Events
```bash
curl "http://localhost:8000/events"
```

### Protected Endpoint
```bash
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  "http://localhost:8000/events/protected"
```

## Future Enhancements

- Event detail pages
- Ticket purchasing flow
- User profile management
- Advanced search filters
- Real-time event data integration
- Payment processing
- Enhanced authentication with social logins
- Event recommendation system

## Contributing

When contributing to this project, please:
1. Follow the existing code style and structure
2. Maintain the StubHub design consistency
3. Test across different screen sizes
4. Update documentation as needed

## License

This project is for educational and demonstration purposes.
