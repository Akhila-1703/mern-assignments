# ⚙️ User Management Backend  
### Node.js • Express.js • MongoDB • Mongoose

A scalable REST API backend built for managing users with **creation, retrieval, activation, and soft deletion workflows**.

This backend follows a **modular architecture**, separating API routes, database models, environment configuration, and server initialization for maintainability and easier deployment.

---

# 🌍 Live Deployment

### 🚀 Backend URL

🔗 https://user-management-0y95.onrender.com

---

# 🏗️ 1. Architecture & System Flow

This backend follows a clean layered architecture.

```text
Client Request
      │
      ▼
Express Server
      │
      ▼
Route Layer (UserAPI)
      │
      ▼
Validation & Business Logic
      │
      ▼
Mongoose Models
      │
      ▼
MongoDB Database
      │
      ▼
JSON Response
```

### Architecture Highlights

✅ Modular route separation  
✅ MongoDB schema validation  
✅ Environment-based configuration  
✅ RESTful API design  
✅ Soft delete implementation  
✅ Error handling middleware ready  

---

# 🚀 2. Local Installation & Setup

## Clone Repository

```bash
git clone <repository-url>
```

Move into backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run server:

```bash
node server.js
```

Server:

```text
http://localhost:4000
```

---

# 🔐 3. Environment Configuration

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

# 📂 4. Backend Project Structure

```text
backend/
│
├── APIs/
│   └── UserAPI.js
│
├── models/
│   └── UserModel.js
│
├── .env
│
├── package.json
│
├── package-lock.json
│
└── server.js
```

---

## APIs/

Contains all backend route definitions.

### UserAPI.js

Responsible for:

- Create User
- Get Users
- Get User By ID
- Soft Delete User
- Activate User

---

## models/

Contains MongoDB schemas.

### UserModel.js

Responsible for:

- Data structure
- Validation
- Collection mapping

---

## server.js

Backend bootstrap file.

Responsibilities:

- Express initialization
- Database connection
- Middleware setup
- Route mounting
- Server startup

---

## package.json

Contains:

- Dependencies
- Scripts
- Metadata

---

# 📦 5. Technology Stack & Package Evaluation

| Package | Purpose |
|----------|----------|
| express | REST API server and routing |
| mongoose | MongoDB object modeling |
| cors | Frontend communication |
| dotenv | Environment variable management |

---

## Express

Install:

```bash
npm install express
```

Purpose:

- Server creation
- Route handling
- Middleware execution

Import:

```js
import exp from "express"
```

---

## Mongoose

Install:

```bash
npm install mongoose
```

Purpose:

- MongoDB connection
- Schema creation
- CRUD operations

Import:

```js
import { connect } from "mongoose"
```

---

## CORS

Install:

```bash
npm install cors
```

Purpose:

- Enable frontend access

Import:

```js
import cors from "cors"
```

---

## Dotenv

Install:

```bash
npm install dotenv
```

Purpose:

- Secure configuration

Import:

```js
import { config } from "dotenv"

config()
```

---

# 🗄️ 6. Database Schema

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

---

## Schema Rules

| Field | Type | Required |
|-------|------|----------|
| name | String | Yes |
| email | String | Yes |
| dateOfBirth | Date | Yes |
| mobileNumber | Number | No |
| status | Boolean | Default true |

---

Additional Configuration

```js
timestamps:true
strict:"throw"
versionKey:false
```

Meaning:

| Option | Description |
|---------|-------------|
| timestamps | Adds createdAt and updatedAt |
| strict | Prevents unknown fields |
| versionKey | Removes __v |

---

# 🌐 7. API Reference

### Base URL

```text
https://user-management-0y95.onrender.com/user-api
```

---

## 🟢 Create User

| Method | Endpoint |
|---------|----------|
| POST | /users |

Request

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

## 🔵 Get Active Users

| Method | Endpoint |
|---------|----------|
| GET | /users |

Returns:

```js
status:true
```

Response

```json
{
"message":"users",
"payload":[]
}
```

---

## 🟡 Get User By ID

| Method | Endpoint |
|---------|----------|
| GET | /users/:id |

Example:

```http
/users/685ab123
```

Success

```json
{
"message":"user found",
"payload":{}
}
```

---

## 🔴 Soft Delete User

| Method | Endpoint |
|---------|----------|
| DELETE | /users/:id |

Operation:

```js
status=false
```

Response

```json
{
"message":"user deleted"
}
```

---

## 🟣 Activate User

| Method | Endpoint |
|---------|----------|
| PATCH | /users/:id |

Operation:

```js
status=true
```

Response

```json
{
"message":"user activated",
"payload":{}
}
```

---

# 🛡️ 8. Error Handling

### Validation Error

```json
{
"message":"Validation failed"
}
```

---

### Invalid Mongo ID

```json
{
"message":"Invalid ID format"
}
```

---

### Duplicate Email

```json
{
"message":"Duplicate field value"
}
```

---

### Internal Error

```json
{
"message":"Internal Server Error"
}
```

---

# 🔗 9. CORS Configuration

Allowed Origins

```js
[
"http://localhost:5173",
"https://user-management-0y95.onrender.com"
]
```

---

# ▶️ 10. Running Backend

Development

```bash
node server.js
```

Server Output

```text
Server started on port 4000
Connected to MongoDB
```

---

# 🔮 11. Future Enhancements

- JWT Authentication
- Authorization
- User Search
- Pagination
- Update User API
- Request Logging
- Docker Deployment
- Unit Testing
- Swagger Documentation

---

## 👩‍💻 Developed By

**Akhila**  
User Management Backend Project
