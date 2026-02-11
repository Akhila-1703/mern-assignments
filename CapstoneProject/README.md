# Backend Development

## Setup

1. **Create Git repository**

```
git init
```

2. **Add .gitignore file**

Create a `.gitignore` file and add:

```
node_modules/
.env
```

3. **Environment variables**

Create a `.env` file for sensitive data and install dotenv:

```
npm install dotenv
```

In your main file:

```js
require("dotenv").config();
```

4. **Generate package.json**

```
npm init -y
```

5. **Create Express application**

Install Express:

```
npm install express
```

Create `server.js` and set up a basic Express server.

6. **Connect to Database**

Install Mongoose:

```
npm install mongoose
```

Connect to MongoDB using a connection string from `.env`.

7. **Add Middlewares**

Use:

* Body parser middleware
* Error handling middleware
* CORS middleware if needed

Example:

```js
app.use(express.json());
```

8. **Design Schemas and Models**

Create schema files inside a `models/` folder and define Mongoose models.

9. **Design REST APIs**

Create routes for all resources inside a `routes/` folder, such as:

* Users
* Authors
* Posts or other entities

## Authentication

10. **Registration and Login**

Implement registration and login common for both user and author.

Create a separate authentication service so the logic can be reused.

11. **Client Integration**

The frontend client will:

* Send registration data to backend
* Send login credentials
* Receive authentication token
* Use the token for protected routes
