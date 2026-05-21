# User Management Frontend

Frontend for the User Management Application built using **React + Vite**.

This application allows users to:

- Register users
- Login
- View users
- Delete users (soft delete)
- Activate users
- Navigate using role-based dashboards

---

# Live Deployment

Frontend URL:

:contentReference[oaicite:0]{index=0}

Backend URL:

:contentReference[oaicite:1]{index=1}

---

# Tech Stack

- React
- Vite
- React Router
- Axios
- Bootstrap
- JavaScript
- CSS

---

# Frontend Architecture

Frontend follows a **Component Based Architecture**

User  
↓  
React Components  
↓  
API Services (Axios)  
↓  
Backend REST APIs  
↓  
MongoDB

---

# Project Folder Structure

frontend/
│
├── public/
│
├── src/
│
│── components/
│ │
│ ├── RootLayout.jsx
│ ├── Home.jsx
│ ├── Register.jsx
│ ├── Login.jsx
│ │
│ ├── UserDashboard.jsx
│ ├── UserProfile.jsx
│ ├── UserHome.jsx
│ │
│ ├── AuthorDashboard.jsx
│ ├── AuthorProfile.jsx
│ │
│ ├── AdminDashboard.jsx
│ ├── AdminProfile.jsx
│
│── App.jsx
│── main.jsx
│── index.css
│
├── .env
├── package.json
├── vite.config.js
└── README.md

---

# File Explanation

## main.jsx

Purpose:

- Application entry point
- Renders React App

Example:

```jsx
createRoot(
 document.getElementById("root")
).render(
 <RouterProvider router={router}/>
)
```

---

## App.jsx

Purpose:

- Main application component
- Loads routes

---

## RootLayout.jsx

Purpose:

- Shared layout
- Navbar
- Outlet rendering

```jsx
<Outlet />
```

Allows child routes.

---

## Home.jsx

Purpose:

- Landing page

---

## Register.jsx

Purpose:

- User registration form
- Sends data to backend

API:

```js
POST /user-api/users
```

---

## Login.jsx

Purpose:

- Login validation
- Authentication handling

---

## UserDashboard.jsx

Purpose:

- Dashboard wrapper

Contains:

- Profile
- Home

---

## UserProfile.jsx

Purpose:

- User details

---

## UserHome.jsx

Purpose:

- User landing page

---

## AuthorDashboard.jsx

Purpose:

- Author pages container

---

## AuthorProfile.jsx

Purpose:

- Author profile page

---

## AdminDashboard.jsx

Purpose:

- Admin area

---

## AdminProfile.jsx

Purpose:

- Admin details

---

# Packages Used

## 1. react

Used for:

- Building UI
- Component creation

Install:

```bash
npm install react
```

Import:

```jsx
import React from "react"
```

---

## 2. react-dom

Used for:

- Rendering components

Install:

```bash
npm install react-dom
```

Usage:

```jsx
import ReactDOM from "react-dom"
```

---

## 3. react-router

Used for:

- Navigation
- Nested routes

Install:

```bash
npm install react-router
```

Usage:

```jsx
import {
createBrowserRouter,
RouterProvider
}
from "react-router"
```

---

## 4. axios

Used for:

- Calling backend APIs

Install:

```bash
npm install axios
```

Example:

```js
axios.get(
`${import.meta.env.VITE_API_URL}/user-api/users`
)
```

---

## 5. bootstrap

Used for:

- Styling
- Responsive UI

Install:

```bash
npm install bootstrap
```

Import:

```jsx
import "bootstrap/dist/css/bootstrap.min.css"
```

---

## 6. vite

Used for:

- Fast frontend build
- Development server

Install:

```bash
npm install vite
```

Run:

```bash
npm run dev
```

---

# Installation

Clone repository:

```bash
git clone <repo-url>
```

Move:

```bash
cd frontend
```

Install:

```bash
npm install
```

Start:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

---

# Environment Variables (.env)

Create:

```env
VITE_API_URL=https://user-management-0y95.onrender.com
```

Local:

```env
VITE_API_URL=http://localhost:4000
```

Use:

```js
import.meta.env.VITE_API_URL
```

Example:

```js
axios.post(
`${import.meta.env.VITE_API_URL}/user-api/users`,
userObj
)
```

---

# API Integration

Base URL:

```text
https://user-management-0y95.onrender.com
```

Examples:

Get Users

```http
GET /user-api/users
```

Create User

```http
POST /user-api/users
```

Delete User

```http
DELETE /user-api/users/:id
```

Activate User

```http
PATCH /user-api/users/:id
```

---

# Routing Architecture

```text
RootLayout
│
├── Home
├── Register
├── Login
│
├── UserDashboard
│     ├── UserHome
│     └── UserProfile
│
├── AuthorDashboard
│     └── AuthorProfile
│
└── AdminDashboard
      └── AdminProfile
```

---

# Build Output

Generated folder:

```text
dist/
```

Deploy command:

```bash
npm run build
```

Output directory:

```text
dist
```

---

# Deployment (Vercel)

Framework:

```text
Vite
```

Build Command:

```bash
npm run build
```

Output:

```text
dist
```

Environment Variable:

```text
VITE_API_URL
```

---

# Future Improvements

- JWT Authentication
- Protected Routes
- Search Users
- Pagination
- Dark Mode
- Notifications
- Form Validation
- State Management
- Loading Skeletons