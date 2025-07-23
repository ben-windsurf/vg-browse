# StubHub Demo Backend

A minimal FastAPI backend for the StubHub demo application with JWT authentication and event endpoints.

## Features

- **User Authentication**: JWT-based signup and login endpoints
- **Events API**: Hardcoded events endpoint matching frontend data
- **SQLite Database**: File-based SQLite for local development
- **Docker Support**: Containerized with Docker and docker-compose
- **CORS Enabled**: Configured for React frontend on localhost:3000

## Quick Start

### Using Docker (Recommended)

1. Build and run the container:
```bash
cd backend
docker-compose up --build
```

The API will be available at `http://localhost:8000`

### Local Development

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the server:
```bash
uvicorn main:app --reload
```

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

## Example Usage

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

## Configuration

Copy `.env.example` to `.env` and update the SECRET_KEY for production use.

## Database

The SQLite database (`stubhub_demo.db`) will be created automatically when the application starts.
