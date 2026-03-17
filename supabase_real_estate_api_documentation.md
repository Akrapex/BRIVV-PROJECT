# Supabase Real Estate Backend API Documentation

---

## Table of Contents

1. [Authentication](#authentication)
2. [Profiles](#profiles)
3. [Properties](#properties)
4. [Property Locations](#property-locations)
5. [Features & Property Features](#features--property-features)
6. [Conversations & Messages](#conversations--messages)
7. [Payment Providers & Payment Methods](#payment-providers--payment-methods)
8. [Authentication & Headers](#authentication--headers)

---

## Authentication

### Signup
- **Endpoint:** `POST /auth/v1/signup`
- **Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
- **Response:** User object and access token

### Login
- **Endpoint:** `POST /auth/v1/token`
- **Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
- **Response:** Access token

### Magic Link / Password Reset / Email Confirmation
- Supabase built-in endpoints, use `{{ .ConfirmationURL }}` in emails.

---

## Profiles

### Get all profiles (public)
- **Endpoint:** `GET /rest/v1/profiles`
- **Query params:** `?select=*`
- **Auth:** Not required (public read)
- **Response:** Array of profiles

### Get own profile
- **Endpoint:** `GET /rest/v1/profiles?id=eq.{user_id}`
- **Auth:** Required
- **Response:** Profile object

### Update own profile
- **Endpoint:** `PATCH /rest/v1/profiles?id=eq.{user_id}`
- **Body:**
```json
{
  "full_name": "John Doe",
  "phone": "08012345678",
  "avatar_url": "https://example.com/avatar.png"
}
```
- **Auth:** Required (must be profile owner)
- **Response:** Updated profile

### Delete own profile
- **Endpoint:** `DELETE /rest/v1/profiles?id=eq.{user_id}`
- **Auth:** Required (profile owner)

---

## Properties

### List properties
- **Endpoint:** `GET /rest/v1/properties?select=*`
- **Optional filters:** `?status=eq.listed&city=eq.Uyo`
- **Auth:** Not required (public read)

### Get single property
- **Endpoint:** `GET /rest/v1/properties?id=eq.{property_id}`

### Create property
- **Endpoint:** `POST /rest/v1/properties`
- **Body Example:**
```json
{
  "owner_id": "{auth.uid()}",
  "title": "Luxury Apartment",
  "description": "Sea view apartment",
  "property_type": "apartment",
  "listing_type": "sale",
  "price": 5000000,
  "bedrooms": 3,
  "bathrooms": 2,
  "size_sqm": 120
}
```
- **Auth:** Required (owner)

### Update property
- **Endpoint:** `PATCH /rest/v1/properties?id=eq.{property_id}`
- **Auth:** Required (only owner)

### Delete property
- **Endpoint:** `DELETE /rest/v1/properties?id=eq.{property_id}`
- **Auth:** Required (only owner)

---

## Property Locations

### Get property location
- **Endpoint:** `GET /rest/v1/property_locations?property_id=eq.{property_id}`
- **Response:** Property location object

### Update property location
- **Endpoint:** `PATCH /rest/v1/property_locations?property_id=eq.{property_id}`
- **Auth:** Required (property owner)

---

## Features & Property Features

### Get all features
- **Endpoint:** `GET /rest/v1/features`

### Add property feature
- **Endpoint:** `POST /rest/v1/property_features`
- **Body Example:**
```json
{
  "property_id": "{property_id}",
  "feature_id": "{feature_id}"
}
```
- **Auth:** Required (property owner)

---

## Conversations & Messages

### List conversations for user
- **Endpoint:** `GET /rest/v1/conversation_participants?user_id=eq.{user_id}&select=conversation(*)`

### Send message
- **Endpoint:** `POST /rest/v1/messages`
- **Body Example:**
```json
{
  "conversation_id": "{conversation_id}",
  "sender_id": "{auth.uid()}",
  "content": "Hello!",
  "message_type": "text"
}
```
- **Auth:** Required

---

## Payment Providers & Payment Methods

### List payment methods
- **Endpoint:** `GET /rest/v1/payment_methods?user_id=eq.{user_id}`
- **Auth:** Required

### Add payment method
- **Endpoint:** `POST /rest/v1/payment_methods`
- **Body Example:**
```json
{
  "user_id": "{auth.uid()}",
  "provider_id": "{provider_id}",
  "type": "card",
  "provider_token": "token_from_provider",
  "brand": "visa",
  "last4": "4242",
  "exp_month": 12,
  "exp_year": 2026,
  "is_default": true,
  "status": "active"
}
```
- **Auth:** Required

---

## Authentication & Headers

- **Header for authenticated endpoints:**
```
Authorization: Bearer <access_token>
apikey: <YOUR_SUPABASE_ANON_KEY>
```

- **Public endpoints (no auth required):**
  - GET `/profiles`
  - GET `/properties`

- **Private endpoints (auth required):**
  - POST/PATCH/DELETE `/profiles` (own profile only)
  - POST/PATCH/DELETE `/properties` (own properties only)
  - POST `/messages`
  - POST `/payment_methods`

---

*This documentation is designed for frontend developers to integrate with the Supabase backend of the real estate platform.*

