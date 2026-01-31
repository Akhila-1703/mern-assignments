# Steps to Create Backend

### 1. Initialize Project
Generate package.json file:
```bash
npm init -y
```

npm = Node Package Manager.  
This command creates a default package.json file.

---

### 2. Create HTTP Server

#### a. Install Express
```bash
npm install express
```

#### b. Import Express in your server file
```js
const express = require('express');
```

---

## HTTP Request Types (CRUD Operations)

| Method | Purpose |
|--------|--------|
| GET    | Read resources |
| POST   | Create a new resource |
| PUT    | Update a resource |
| DELETE | Delete a resource |

---

## Base URL
```
http://localhost:3000
```

---

## USER API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /path/users | Get all users |
| POST | /path/user | Create a new user |
| PUT | /path/users/:id | Update a user |
| DELETE | /path/users/:id | Delete a user |

Example:
```
GET http://127.0.0.1:3000/path/users
```

