1. Generate package.json

    npm init -y

2. Create server.js

3. Install,import "express" and create HTTP server. Assign port

### Connect MongoDB database

                REST API  -----> mongodb native driver ----->               MongoDB server
                REST API  -----> mongodb ODM tool(mogoose) ----->           MongoDB server

        a. Install mongoose and connect to mongodb server
        b. Create Schema of resource
        c. Create Model of that schema
        d. perform DB operations on that model
