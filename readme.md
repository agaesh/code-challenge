# 99Tech Code Challenge #1 #

Note that if you fork this repository, your responses may be publicly linked to this repo.  
Please submit your application along with the solutions attached or linked.   

It is important that you minimally attempt the problems, even if you do not arrive at a working solution.

## Submission ##
You can either provide a link to an online repository, attach the solution in your application, or whichever method you prefer.
We're cool as long as we can view your solution without any pain.


# Code Challenge – Problem 1: Summations (Completed)

## 📌 Overview
This project demonstrates three different approaches to solving the summation problem (sum of numbers from 1 to _n_):

1. **For Loop** – Iterative summation
2. **Array.reduce** – Using JavaScript’s built-in reducer
3. **Recursion** – Recursive function calls

The functions are exposed via an **Express.js server** with endpoints to test and view results
---

## 🚀 Features
- `sum_to_n_a(n)` → Summation using a `for` loop
- `sum_to_n_b(n)` → Summation using `Array.reduce`
- `sum_to_n_c(n)` → Summation using recursion
- Express server with:
  - `/problem1` → Returns JSON results of all three summation methods

Got it — let’s regenerate the documentation for **Problem 5** in a clean, professional style that matches your repo’s format. Here’s a polished section you can drop straight into your README:

---

# Code Challenge – Problem 5: CRUD User Server (Completed)

## 📌 Overview
This project implements a **CRUD (Create, Read, Update, Delete) API** for managing users, built with **Express.js** and **SQLite**. It provides endpoints to add, retrieve, update, and delete user records, with support for filtering and audit fields (`created_at`, `updated_at`).

---

## 🚀 Features
- **Database Connection**
  - `db.js` initializes a SQLite database using `better-sqlite3`.
  - `users` table includes:  
    - `id` (primary key)  
    - `name`, `email`, `age`, `phone`  
    - `created_at` (auto‑set on insert)  
    - `updated_at` (auto‑updated on modification)

- **CRUD Endpoints**
  - `POST /problem5/users` → Create a new user  
  - `GET /problem5/users` → Retrieve all users (supports filters: `name`, `email`, `age`, `phone`)  
  - `GET /problem5/users/:id` → Retrieve a single user by ID (supports `?fields=` query to select specific columns)  
  - `PUT /problem5/users/:id` → Update an existing user by ID (refreshes `updated_at`)  
  - `DELETE /problem5/users/:id` → Delete a user by ID  

---

## 📂 Example Requests

### Create User
```json
POST /problem5/users
{
  "name": "Agaesh Kumar",
  "email": "agaesh.kumar@example.com",
  "age": 25,
  "phone": "+60123456789"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Agaesh Kumar",
  "email": "agaesh.kumar@example.com",
  "age": 25,
  "phone": "+60123456789",
  "created_at": "2026-02-12 12:30:00",
  "updated_at": "2026-02-12 12:30:00"
}
```

---

### Filter Users
```http
GET /problem5/users?name=agaesh&email=gmail.com
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Agaesh Kumar",
    "email": "agaesh@gmail.com",
    "age": 25,
    "phone": "123456789",
    "created_at": "2026-02-12 12:30:00",
    "updated_at": "2026-02-12 12:30:00"
  }
]
```

---

### Update User
```json
PUT /problem5/users/1
{
  "name": "Agaesh K.",
  "email": "agaesh.k@example.com",
  "age": 26,
  "phone": "987654321"
}
```

**Response:**
```json
{
  "message": "User updated successfully",
  "user": {
    "id": 1,
    "name": "Agaesh K.",
    "email": "agaesh.k@example.com",
    "age": 26,
    "phone": "987654321",
    "created_at": "2026-02-12 12:30:00",
    "updated_at": "2026-02-12 12:45:00"
  }
}
```

---

### Delete User
```http
DELETE /problem5/users/1
```

**Response:**
```json
{
  "message": "User deleted successfully"
}
```

---

# 🚀 Running the Server

## 1. Start the Application
 
Start the server with:

```bash
npm start
```

You should see:

```
Server running at http://localhost:3000
```

---

## 2. Problem 4 – Summation
Open your browser and visit:

```
http://localhost:3000/problem4
```

You’ll see JSON output showing the results of the three summation methods:

```json
{
  "forLoop": 15,
  "reducer": 15,
  "recursion": 15
}
```

---

## 3. Problem 5 – CRUD Users

### View All Users
Open in browser:

```
http://localhost:3000/problem5/users
```

This returns all users in the database.  
You can also filter with query parameters:

```
http://localhost:3000/problem5/users?name=agaesh
```

---

### Create a User (POST)
Use **curl** or Postman to send a POST request:

```bash
curl -X POST http://localhost:3000/problem5/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Agaesh Kumar","email":"agaesh@example.com","age":25,"phone":"123456"}'
```

---

### Update a User (PUT)
```bash
curl -X PUT http://localhost:3000/problem5/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Agaesh K.","email":"agaesh.k@example.com","age":26,"phone":"987654321"}'
```

---

### Delete a User (DELETE)
```bash
curl -X DELETE http://localhost:3000/problem5/users/1
```

---

## 4. Notes
- **Browser** is good for GET routes (`/problem4`, `/problem5/users`, `/problem5/users/:id`).  
- **POST/PUT/DELETE** require tools like curl, Postman, or any REST client.  
- `created_at` and `updated_at` fields are automatically managed by the database and included in responses.

---

## 1. Running TestCase
 
Start the Server with:

```bash
npm test
```

Writting the npm test in terminal will run the integration test

---
