# Inventory Management System

A simple full-stack Inventory Management System built using React, Node.js, Express.js, and MongoDB.

Developed as part of an internship technical assignment.

## Demo Video

**[▶ Watch the Demo Video](https://drive.google.com/file/d/1bZLvNxVENLKscyfkm_XHvGT5phkzg1eF/view?usp=sharing)**

## Features

- Add products
- View products
- Update products
- Delete products
- Search products by name
- Filter products by category
- Low-stock detection
- Low-stock highlighting
- Product and category summary
- Form validation
- Error handling
- Responsive design

## Technologies Used

**Frontend**
- React.js
- Vite
- JavaScript
- HTML
- CSS

**Backend**
- Node.js
- Express.js
- Mongoose
- REST API
- CORS
- dotenv

**Database**
- MongoDB Atlas

**Tools**
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
│   ├── controllers/
│   │   └── productController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/products` | Add product |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |
| GET | `/api/products/low-stock` | Get low-stock products |

## Setup

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## Low Stock

A product is considered low stock when:

```text
Quantity <= Minimum Stock
```

Low-stock products are highlighted in the product table.

## Assumptions

- MongoDB Atlas is used for database storage.
- Product IDs are generated automatically.
- Authentication is not included.
- The application runs locally.

## Future Improvements

- User authentication
- Product images
- Stock history
- Reports and analytics
- Cloud deployment

## Author

**Tharun Krishna**

GitHub: [Greyhunter2](https://github.com/Greyhunter2)