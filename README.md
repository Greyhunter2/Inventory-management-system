# Inventory Management System

A simple full-stack Inventory Management System developed using React, Node.js, Express.js, and MongoDB.

This project was developed as part of an internship technical assignment to demonstrate full-stack development, REST API integration, database management, CRUD operations, and responsive frontend design.

## Features

- Add new products
- View all products
- Update existing products
- Delete products
- Search products by name
- Filter products by category
- Identify low-stock products
- Highlight low-stock products
- Display total number of products
- Display total number of low-stock products
- Display number of product categories
- Form validation
- Error handling
- Responsive user interface
- MongoDB database integration
- RESTful API architecture

## Technologies Used

### Frontend

- React.js
- JavaScript
- HTML
- CSS
- Vite

### Backend

- Node.js
- Express.js
- Mongoose
- REST API
- CORS
- dotenv

### Database

- MongoDB Atlas

### Development Tools

- Visual Studio Code
- Thunder Client
- Git
- GitHub

## Project Structure

```text
https://drive.google.com/file/d/1bZLvNxVENLKscyfkm_XHvGT5phkzg1eF/view?usp=sharing
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
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
└── frontend/
    ├── public/
    │
    ├── src/
    │   ├── assets/
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── index.html
    ├── package.json
    └── vite.config.js

## Assumptions

- MongoDB Atlas is used as the database.
- The backend runs locally on port 5000.
- The frontend runs locally on port 5173.
- Product IDs are generated automatically.
- Low stock is identified when quantity is less than or equal to minimum stock.
- The application is intended for basic inventory management.

## Future Improvements

- User authentication and authorization
- Product images
- Pagination for large inventories
- Stock history and reports
- Dashboard charts and analytics
- Deployment to cloud platforms

## Demo Video

The complete demonstration of the Inventory Management System is available here:

**[Watch the Demo Video](https://drive.google.com/file/d/1bZLvNxVENLKscyfkm_XHvGT5phkzg1eF/view?usp=sharing)**

## Internship Assignment

This project was developed as part of an internship technical assignment to demonstrate practical knowledge of:

- React
- Node.js
- Express.js
- MongoDB
- REST API development
- CRUD operations
- Frontend and backend integration
- Responsive web development

## Author

**Tharun Krishna**

GitHub: [Greyhunter2](https://github.com/Greyhunter2)