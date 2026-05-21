# User Management Backend

Backend service for the User Management Application built using **Node.js, Express.js, and MongoDB**.

This backend provides REST APIs to create, read, activate, and soft delete users.

## Live Backend Deployment

Backend URL:  
:contentReference[oaicite:0]{index=0}

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

---

# Backend Folder Structure

backend/
│
├── APIs/
│ └── UserAPI.js # User API routes
│
├── models/
│ └── UserModel.js # MongoDB schema/model
│
├── .env # Environment variables
│
├── package.json # Project dependencies
│
├── package-lock.json
│
└── server.js # Entry point


---

# Packages Used

## 1. express

Used to:

- Create backend server
- Handle HTTP requests
- Define API routes
- Middleware handling

Install:

```bash
npm install express
```

Usage:

```js
import exp from "express";
```

---

## 2. mongoose

Used to:

- Connect Node.js with MongoDB
- Create schemas
- Perform CRUD operations

Install:

```bash
npm install mongoose
```

Usage:

```js
import { connect } from "mongoose";
```

---

## 3. dotenv

Used to:

- Store sensitive information in environment variables
- Access `.env` values

Install:

```bash
npm install dotenv
```

Usage:

```js
import { config } from "dotenv";

config();
```

---

## 4. cors

Used to:

- Allow frontend and backend communication

Install:

```bash
npm install cors
```

Usage:

```js
import cors from "cors";
```

---

## 5. react-router

Present in package.json.

Install:

```bash
npm install react-router
```

Purpose:
Currently not required inside backend code.
It can be removed if unused.

Remove:

```bash
npm uninstall react-router
```

---

# Installation

## Clone Project

```bash
git clone <repo-url>
```

Move to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start server:

```bash
node server.js
```

---

# Environment Variables (.env)

Create `.env`

```env
PORT=4000

DB_URL=your_mongodb_connection_string
```

Example:

```env
PORT=4000

DB_URL=mongodb+srv://username:password@cluster.mongodb.net/userdb
```

---

# Database Schema

## User Schema

```js
{
 name: String,
 email: String,
 dateOfBirth: Date,
 mobileNumber: Number,
 status: Boolean
}
```

### Schema Rules

| Field | Type | Required |
|--------|------|----------|
| name | String | Yes |
| email | String | Yes |
| dateOfBirth | Date | Yes |
| mobileNumber | Number | No |
| status | Boolean | Default true |

Additional:

```js
timestamps:true
strict:"throw"
versionKey:false
```

Meaning:

- timestamps → createdAt & updatedAt added automatically
- strict → extra fields not allowed
- versionKey → removes `__v`

---

# Backend Flow

Client  
↓  
Express Server  
↓  
API Routes  
↓  
Mongoose  
↓  
MongoDB

---

# API Base URL

```text
https://user-management-0y95.onrender.com/user-api
```

---

# APIs

## 1. Create User

### POST

```http
/user-api/users
```

Request:

```json
{
 "name":"Akhila",
 "email":"akhila@gmail.com",
 "dateOfBirth":"2003-08-10",
 "mobileNumber":9876543210
}
```

Response

```json
{
 "message":"User created",
 "payload":{}
}
```

---

## 2. Get All Active Users

### GET

```http
/user-api/users
```

Response:

```json
{
 "message":"users",
 "payload":[]
}
```

Returns users with:

```js
status:true
```

---

## 3. Get User By ID

### GET

```http
/user-api/users/:id
```

Example:

```http
/user-api/users/685ab123
```

Success:

```json
{
 "message":"user found",
 "payload":{}
}
```

Failure:

```json
{
 "message":"user not found"
}
```

---

## 4. Soft Delete User

### DELETE

```http
/user-api/users/:id
```

What happens:

```js
status=false
```

Response:

```json
{
 "message":"user deleted"
}
```

---

## 5. Activate User

### PATCH

```http
/user-api/users/:id
```

What happens:

```js
status=true
```

Response:

```json
{
 "message":"user activated",
 "payload":{}
}
```

---

# Error Handling

Implemented:

### Validation Error

```json
{
 "message":"Validation failed"
}
```

### Invalid Mongo ID

```json
{
 "message":"Invalid ID format"
}
```

### Duplicate Email

```json
{
 "message":"Duplicate field value"
}
```

### Server Error

```json
{
 "message":"Internal Server Error"
}
```

---

# CORS Configuration

Allowed Origins:

```js
[
 "http://localhost:5173",
 "https://user-management-0y95.onrender.com"
]
```

---

# Run Backend

Development:

```bash
node server.js
```

Server starts:

```text
server started on port 4000
```

---

# Future Improvements

- Authentication
- JWT Authorization
- Pagination
- Search users
- Update user API
- Logging
- Docker deployment