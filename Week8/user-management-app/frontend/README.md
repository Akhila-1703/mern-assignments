# 🎨 User Management Frontend  
### React • Vite • React Router • Axios • Bootstrap

A modern frontend application built using **React + Vite** for managing users through an intuitive dashboard interface.

This frontend communicates with a deployed backend REST API and provides user registration, login, user viewing, activation, and management features through a modular component architecture.

---

# 🌍 Live Deployment

### 🚀 Frontend URL

🔗 https://vercel.com/akhilas-projects-29fa9b92/user-management-app


---

# 🏗️ 1. Frontend Architecture & System Flow

The application follows a **Component-Based Architecture** with centralized routing and API communication.

```text
User Interaction
       │
       ▼
React Components
       │
       ▼
React Router
       │
       ▼
Axios Service Calls
       │
       ▼
Backend REST APIs
       │
       ▼
MongoDB Database
```

### Architecture Highlights

✅ Component Reusability  
✅ Nested Route Management  
✅ Environment-Based API Configuration  
✅ REST API Communication  
✅ Modular Dashboard Structure  
✅ Responsive UI Design  

---

# 🚀 2. Local Installation & Setup

Clone repository:

```bash
git clone <repository-url>
```

Move into frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

# 🔐 3. Environment Configuration

Create `.env`

```env
VITE_API_URL=https://user-management-0y95.onrender.com
```

For local development:

```env
VITE_API_URL=http://localhost:4000
```

Access variables:

```js
import.meta.env.VITE_API_URL
```

Example:

```js
axios.get(
`${import.meta.env.VITE_API_URL}/user-api/users`
)
```

---

# 📂 4. Frontend Project Structure

```text
frontend/
│
├── public/
│
├── src/
│
│── components/
│   │
│   ├── RootLayout.jsx
│   ├── Home.jsx
│   ├── Register.jsx
│   ├── Login.jsx
│   │
│   ├── UserDashboard.jsx
│   ├── UserProfile.jsx
│   ├── UserHome.jsx
│   │
│   ├── AuthorDashboard.jsx
│   ├── AuthorProfile.jsx
│   │
│   ├── AdminDashboard.jsx
│   ├── AdminProfile.jsx
│
│── App.jsx
│── main.jsx
│── index.css
│
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

# 📄 5. File Explanation

## main.jsx

Application entry point.

Responsibilities:

- Create React root
- Render application
- Initialize Router

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

Responsibilities:

- Load main application
- Connect routes

---

## RootLayout.jsx

Responsibilities:

- Shared layout
- Navbar rendering
- Child route rendering

Example:

```jsx
<Outlet/>
```

---

## Home.jsx

Responsibilities:

- Landing page
- Navigation

---

## Register.jsx

Responsibilities:

- Registration form
- Form submission

API:

```text
POST /user-api/users
```

---

## Login.jsx

Responsibilities:

- Login validation
- Session management

---

## UserDashboard.jsx

Responsibilities:

- User dashboard container

Contains:

```text
UserHome
UserProfile
```

---

## UserProfile.jsx

Responsibilities:

- Display user information

---

## UserHome.jsx

Responsibilities:

- Dashboard homepage

---

## AuthorDashboard.jsx

Responsibilities:

- Author section layout

---

## AuthorProfile.jsx

Responsibilities:

- Author details

---

## AdminDashboard.jsx

Responsibilities:

- Admin controls

---

## AdminProfile.jsx

Responsibilities:

- Admin information

---

## vite.config.js

Responsibilities:

- Build optimization
- Development configuration

---

# 📦 6. Technology Stack & Package Evaluation

| Package | Purpose |
|----------|----------|
| react | UI development |
| react-dom | DOM rendering |
| react-router | Navigation |
| axios | API requests |
| bootstrap | Styling |
| vite | Build tool |

---

## React

Install

```bash
npm install react
```

Purpose

- Component creation
- State management

Import

```jsx
import React from "react"
```

---

## React DOM

Install

```bash
npm install react-dom
```

Purpose

- Render UI

Import

```jsx
import ReactDOM from "react-dom"
```

---

## React Router

Install

```bash
npm install react-router
```

Purpose

- Page navigation
- Nested routes

Import

```jsx
import {
createBrowserRouter,
RouterProvider
}
from "react-router"
```

---

## Axios

Install

```bash
npm install axios
```

Purpose

- Backend communication
- HTTP requests

Example

```js
axios.post(
url,
data
)
```

---

## Bootstrap

Install

```bash
npm install bootstrap
```

Purpose

- Responsive design
- UI styling

Import

```jsx
import "bootstrap/dist/css/bootstrap.min.css"
```

---

## Vite

Install

```bash
npm install vite
```

Purpose

- Faster development
- Optimized builds

Run

```bash
npm run dev
```

---

# 🔄 7. Routing Architecture

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

# 🌐 8. API Integration

Base URL

```text
https://user-management-0y95.onrender.com
```

---

## Get Users

```http
GET /user-api/users
```

---

## Create User

```http
POST /user-api/users
```

---

## Delete User

```http
DELETE /user-api/users/:id
```

---

## Activate User

```http
PATCH /user-api/users/:id
```

---

# 🛠️ 9. Build & Production

Build application:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

Generated folder:

```text
dist/
```

---

# ☁️ 10. Deployment (Vercel)

Framework

```text
Vite
```

Build Command

```bash
npm run build
```

Output Directory

```text
dist
```

Environment Variable

```env
VITE_API_URL
```

Production URL

```text
https://vercel.com/akhilas-projects-29fa9b92/user-management-app
```

---

# 🔮 11. Future Enhancements

- JWT Authentication
- Protected Routes
- Search Users
- Pagination
- Dark Mode
- Form Validation
- Toast Notifications
- Global State Management
- Loading Skeleton UI
- Unit Testing

---

## 👩‍💻 Developed By

**Akhila**  
User Management Frontend Project
