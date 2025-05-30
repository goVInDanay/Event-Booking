﻿# Event-Booking
# Event Booking System API

A RESTful API backend for an Event Booking System built with Node.js, Express, Sequelize, and PostgreSQL.  
Users can register, browse events, book tickets, and manage bookings. Admins can manage events.  
JWT-based authentication with role-based access control included.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)

---

## Features

- User signup & login with JWT authentication  
- Role-based access control (user, admin)  
- CRUD operations for events (admin only)  
- Browse all events (public)  
- Book tickets for events (authenticated users)  
- View & cancel bookings   
- Secure password hashing with bcrypt  

---

## Tech Stack

- Node.js & Express  
- Sequelize ORM  
- PostgreSQL database  
- JWT for authentication  

---

## Getting Started

### Prerequisites

- Node.js (v18+)  
- PostgreSQL database  

### Local Setup

1. Clone the repo:
git clone https://github.com/goVInDanay/Event-Booking.git
cd event-booking

2. Install dependencies:
npm install

3. Create .env file in the root:
PORT=5000
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=eventdb
DB_PORT=5432
JWT_SECRET=your_jwt_secret

4. Start the server:
npm start

5. API Endpoints
Auth
Method	 Endpoint	          Description	Access
POST	  /api/auth/register	Register new user,	Public
POST	  /api/auth/login	    Login and get JWT token,	Public

Events
Method	Endpoint	          Description	Access
GET	    /api/events	        List all events,	Public
POST	  /api/events	        Create new event,	Admin only
PUT	    /api/events/:id	    Update event,	Admin only
DELETE	/api/events/:id	    Delete event,	Admin only

Bookings
Method	Endpoint	         Description	Access
POST	  /api/bookings	     Book a ticket for an event,	Authenticated
GET	    /api/bookings	     View user's bookings,	Authenticated
DELETE	/api/bookings/:id	 Cancel a booking,	Authenticated

Authentication
Use JWT tokens returned from /api/auth/login.

Include the token in Authorization header as:
Authorization: Bearer <token>

Folder Structure
event-booking/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── .env
├── app.js
└── package.json

