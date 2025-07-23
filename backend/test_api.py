#!/usr/bin/env python3
"""
Simple test script to demonstrate the StubHub Demo API functionality
"""
import requests
import json

BASE_URL = "http://localhost:8000"

def test_api():
    print("🎫 Testing StubHub Demo API\n")
    
    # Test root endpoint
    print("1. Testing root endpoint...")
    response = requests.get(f"{BASE_URL}/")
    print(f"   Status: {response.status_code}")
    print(f"   Response: {response.json()}\n")
    
    # Test events endpoint (public)
    print("2. Testing events endpoint (public)...")
    response = requests.get(f"{BASE_URL}/events")
    print(f"   Status: {response.status_code}")
    events = response.json()
    print(f"   Found {len(events)} events:")
    for event in events:
        print(f"   - {event['artist']} at {event['venue']} on {event['date']}")
    print()
    
    # Test signup
    print("3. Testing user signup...")
    signup_data = {
        "email": "demo@stubhub.com",
        "password": "demopassword123"
    }
    response = requests.post(f"{BASE_URL}/auth/signup", json=signup_data)
    print(f"   Status: {response.status_code}")
    if response.status_code == 200:
        token_data = response.json()
        access_token = token_data["access_token"]
        print(f"   ✅ Signup successful! Token received.")
    else:
        print(f"   ❌ Signup failed: {response.text}")
        return
    print()
    
    # Test login
    print("4. Testing user login...")
    login_data = {
        "email": "demo@stubhub.com",
        "password": "demopassword123"
    }
    response = requests.post(f"{BASE_URL}/auth/login", json=login_data)
    print(f"   Status: {response.status_code}")
    if response.status_code == 200:
        token_data = response.json()
        access_token = token_data["access_token"]
        print(f"   ✅ Login successful! Token received.")
    else:
        print(f"   ❌ Login failed: {response.text}")
        return
    print()
    
    # Test protected endpoint
    print("5. Testing protected events endpoint...")
    headers = {"Authorization": f"Bearer {access_token}"}
    response = requests.get(f"{BASE_URL}/events/protected", headers=headers)
    print(f"   Status: {response.status_code}")
    if response.status_code == 200:
        events = response.json()
        print(f"   ✅ Protected endpoint accessed! Found {len(events)} events.")
    else:
        print(f"   ❌ Protected endpoint failed: {response.text}")
    print()
    
    # Test protected endpoint without token
    print("6. Testing protected endpoint without token...")
    response = requests.get(f"{BASE_URL}/events/protected")
    print(f"   Status: {response.status_code}")
    if response.status_code == 401:
        print(f"   ✅ Correctly rejected unauthorized request.")
    else:
        print(f"   ❌ Should have been rejected: {response.text}")
    print()
    
    print("🎉 API testing complete!")
    print(f"\n📖 View interactive docs at: {BASE_URL}/docs")
    print(f"📖 View alternative docs at: {BASE_URL}/redoc")

if __name__ == "__main__":
    try:
        test_api()
    except requests.exceptions.ConnectionError:
        print("❌ Could not connect to API. Make sure the server is running:")
        print("   python3 -m uvicorn main:app --reload")
    except Exception as e:
        print(f"❌ Error: {e}")
