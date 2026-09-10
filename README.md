# Inventory Management System

A simple full-stack Inventory Management System developed using React, Node.js, Express.js, and MongoDB.

This project was developed as part of an internship technical assignment to demonstrate full-stack development, REST API integration, database management, and responsive frontend design.

## Features

- Add new products
- View all products
- Update product details
- Delete products
- Search products by name
- Filter products by category
- Identify low-stock products
- Highlight low-stock products in the product table
- Display total number of products
- Display total number of low-stock products
- Display number of product categories
- MongoDB database integration
- RESTful API
- Error handling
- Responsive user interface

## Technologies Used

### Frontend

- React
- Vite
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express.js
- Mongoose
- REST API
- CORS
- dotenv

### Database

- MongoDB Atlas

## Project Structure

```text
Inventory-managment-system/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── productController.js
│   │
│   ├── middleware/
│   │   └── errorHandler.js
│   │
│   ├── models/
│   │   └── Product.js
│   │
│   ├── routes/
│   │   └── productRoutes.js
│   │
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md