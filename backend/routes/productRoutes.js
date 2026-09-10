const express = require("express");

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getLowStockProducts,
} = require("../controllers/productController");

const router = express.Router();

// Product CRUD routes
router.post("/", createProduct);
router.get("/", getProducts);
router.get("/low-stock", getLowStockProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;