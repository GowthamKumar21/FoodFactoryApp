# Food Management System API

A **Node.js** and **MongoDB** backend application to manage **users, foods, ingredients, and orders**. It provides RESTful APIs for CRUD operations and user authentication.

---

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [API Endpoints](#api-endpoints)  
- [Technologies Used](#technologies-used)  
- [Notes](#notes)  

---

## Overview

The **Food Management System API** allows managing:

- Users and authentication  
- Food items, including production and selling costs  
- Ingredients, including availability and vendor information  
- Orders, including linking users and foods  

It’s built with **Express.js**, **MongoDB**, and **Mongoose**.

---

## Features

### User Management
- User signup and login (passwords hashed using MD5)  
- Update user details and status  
- Deactivate users  

### Food Management
- Create, read, update, delete (CRUD) food items  
- Identify foods with high production costs  

### Ingredients Management
- CRUD ingredients  
- Check low stock ingredients  
- Retrieve ingredients by vendor  

### Order Management
- CRUD orders  
- Fetch all orders of a user  
- Populate order details with user and food info  

---

## Project Structure

src/
│
├─ config/ # App and DB configurations
│ ├─ express.js # Express app setup
│ ├─ mongoose.js # MongoDB connection setup
│ └─ router.js # Router template
│
├─ controller/ # Request handlers
│ ├─ foodController.js
│ ├─ ingredientsController.js
│ ├─ orderController.js
│ └─ userController.js
│
├─ model/ # MongoDB Schemas
│ ├─ foodSchema.js
│ ├─ ingredientsSchema.js
│ ├─ orderSchema.js
│ └─ userSchema.js
│
├─ routes/ # Express routes
│ ├─ foodRoutes.js
│ ├─ ingredientsRoutes.js
│ ├─ orderRoutes.js
│ └─ userRoutes.js
│
└─ index.js # Entry point

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/NGowthamKumar/FoodFactoryApp
cd FoodFactoryApp
```

2. Install dependencies:

```bash
npm install
```

3. Start MongoDB (make sure it’s running):

```bash
mongod
```

4. Start the server:

```bash
node index.js
```

Default server port: `8000`.

---

## API Endpoints

### User
| Method | Endpoint                  | Description                   |
|--------|---------------------------|-------------------------------|
| POST   | `/user/signup`            | Register a new user           |
| POST   | `/user/login`             | Login user                    |
| PUT    | `/user/update`            | Update user details           |
| PUT    | `/user/update-password`   | Update user password          |
| PUT    | `/user/update-status`     | Update user status            |
| PUT    | `/user/deactivate`        | Deactivate user               |

### Food
| Method | Endpoint                  | Description                   |
|--------|---------------------------|-------------------------------|
| POST   | `/food`                   | Add new food                  |
| GET    | `/food/:lotNumber`        | Get food by lot number        |
| PUT    | `/food`                   | Update food                   |
| DELETE | `/food/:lotNumber`        | Delete food                   |
| GET    | `/food/high-cost`         | Get foods with high production cost |

### Ingredients
| Method | Endpoint                     | Description                    |
|--------|------------------------------|--------------------------------|
| POST   | `/ingredients`               | Add new ingredient             |
| GET    | `/ingredients/:lotNumber`    | Get ingredient by lot number   |
| PUT    | `/ingredients`               | Update ingredient              |
| DELETE | `/ingredients/:lotNumber`    | Delete ingredient              |
| GET    | `/ingredients/low-stock`     | Get ingredients with low stock |
| GET    | `/ingredients/vendor/:vendorName` | Get ingredients of vendor |

### Orders
| Method | Endpoint                    | Description                   |
|--------|-----------------------------|-------------------------------|
| POST   | `/order`                    | Create new order              |
| GET    | `/order/:orderNum`          | Get order by order number     |
| PUT    | `/order`                    | Update order                  |
| DELETE | `/order/:orderNum`          | Delete order                  |
| GET    | `/order/user/:email`        | Get all orders of a user      |

---

## Technologies Used

- Node.js  
- Express.js  
- MongoDB & Mongoose  
- MD5 for password hashing  
- REST API

---

## Notes

- Make sure MongoDB is running before starting the server.  
- Default server port is `8000`.  
- For production, consider using environment variables for database URI and sensitive info.
