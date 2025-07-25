#!/usr/bin/env python3
"""
Initialize the event database with sample data
"""
from database import init_event_db

if __name__ == "__main__":
    print("Initializing event database...")
    init_event_db()
    print("Event database initialized successfully!")
