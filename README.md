# CSIS 408 Project 2 (Backend)
Backend for web application suggestion box using Express and Node.js. This application also utilizes JWTs for protected routes.

## Routes

GET /api/requests
Returns a list of requests made by students

POST /api/requests
Creates a new request

PATCH /api/requests/:id
Updates a current request

DELETE /api/requests/:id
Deletes a request

POST /api/users/login
Logs the user into the application

POST /api/users/signup
Creates new user
