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
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## Product Fields

Each product contains the following information:

| Field | Description |
|---|---|
| ID | Unique identifier automatically generated for each product |
| Name | Name of the product |
| Category | Category of the product |
| Price | Price of the product |
| Quantity | Current available stock quantity |
| Minimum Stock | Minimum stock level used for low-stock detection |
| Created At | Date and time when the product was created |

## Low Stock Detection

A product is considered **Low Stock** when:

```text
Quantity <= Minimum Stock
```

Low-stock products are automatically highlighted in the product table to make them easier to identify.

## REST API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/products` | Create a new product |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a product by ID |
| PUT | `/api/products/:id` | Update an existing product |
| DELETE | `/api/products/:id` | Delete a product |
| GET | `/api/products/low-stock` | Get all low-stock products |

### Health Check

```text
GET /api/health
```

This endpoint is used to verify that the backend server is running correctly.

## Backend Setup

### 1. Navigate to the backend folder

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` folder.

Add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

### 4. Start the backend server

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

## Frontend Setup

### 1. Open another terminal

Navigate to the frontend folder:

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## Running the Complete Application

To run the complete application:

### Terminal 1 - Backend

```bash
cd backend
npm run dev
```

Backend:

```text
http://localhost:5000
```

### Terminal 2 - Frontend

```bash
cd frontend
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Open the frontend URL in a web browser to use the application.

## Application Workflow

The application follows this basic workflow:

```text
User
  ↓
React Frontend
  ↓
REST API
  ↓
Node.js + Express.js Backend
  ↓
Mongoose
  ↓
MongoDB Atlas
```

The React frontend communicates with the Express.js backend using REST API requests. The backend processes the requests and stores or retrieves product information from MongoDB Atlas.

## CRUD Operations

The system supports complete CRUD functionality.

### Create

Users can add new products by entering:

- Product name
- Category
- Price
- Quantity
- Minimum stock

### Read

Users can view all available products in the product table.

### Update

Users can select the **Edit** button to modify existing product information.

### Delete

Users can select the **Delete** button to remove a product from the inventory.

A confirmation message is displayed before deleting a product.

## Search and Filtering

The application provides:

### Product Search

Users can search for products by entering the product name in the search box.

### Category Filter

Users can select a category from the dropdown menu to display products belonging to that category.

Search and category filtering can be used together.

## Error Handling

The application includes basic error handling for:

- Backend connection problems
- MongoDB connection errors
- Invalid product data
- Product not found
- API request failures
- Frontend loading errors
- Delete operation failures

The backend uses a centralized error-handling middleware to return appropriate error responses.

## Form Validation

The product form validates important fields before submitting data.

The following fields are required:

- Product name
- Category
- Price
- Quantity
- Minimum stock

Price, quantity, and minimum stock values cannot be negative.

## Assumptions

- MongoDB Atlas is used as the database.
- The backend runs locally on port 5000.
- The frontend runs locally on port 5173.
- Product IDs are generated automatically.
- Low stock is identified when quantity is less than or equal to minimum stock.
- The application is intended for basic inventory management.
- Authentication and authorization are not included in the current version.

## Future Improvements

The application can be improved further by adding:

- User authentication and authorization
- Product images
- Pagination for large inventories
- Stock history and reports
- Dashboard charts and analytics
- Advanced inventory reports
- Product sorting
- Deployment to cloud platforms
- Role-based access control

## Demo Video

The complete demonstration of the Inventory Management System is available here:

**[▶ Watch the Demo Video](https://drive.google.com/file/d/1bZLvNxVENLKscyfkm_XHvGT5phkzg1eF/view?usp=sharing)**

The demonstration covers:

- Application overview
- Dashboard
- Adding products
- Viewing products
- Searching products
- Filtering by category
- Updating products
- Low-stock detection
- Deleting products
- Backend API
- MongoDB integration
- Project structure

## Internship Assignment

This project was developed as part of an internship technical assignment to demonstrate practical knowledge of:

- React.js
- Node.js
- Express.js
- MongoDB
- REST API development
- CRUD operations
- Frontend and backend integration
- Database management
- Form validation
- Error handling
- Responsive web development

## Author

**Tharun Krishna**

GitHub: [Greyhunter2](https://github.com/Greyhunter2)