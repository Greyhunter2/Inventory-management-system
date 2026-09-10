import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    minStock: "",
  });

  const [editingId, setEditingId] = useState(null);

  // Get all products from backend
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:5000/api/products"
      );

      if (!response.ok) {
        throw new Error("Unable to fetch products");
      }

      const result = await response.json();

      setProducts(result.data);
    } catch (error) {
      console.error("Error fetching products:", error);

      setError(
        "Unable to load products. Please check if the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  // Load products when page opens
  useEffect(() => {
    fetchProducts();
  }, []);

  // Find low-stock products
  const lowStockProducts = products.filter(
    (product) => product.quantity <= product.minStock
  );

  // Find number of different categories
  const categories = new Set(
    products.map((product) => product.category)
  );

  // Search and category filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Handle form input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Add or update product
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const productData = {
        name: formData.name,
        category: formData.category,
        price: Number(formData.price),
        quantity: Number(formData.quantity),
        minStock: Number(formData.minStock),
      };

      let response;

      // Update product
      if (editingId) {
        response = await fetch(
          `http://localhost:5000/api/products/${editingId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
          }
        );
      } else {
        // Create product
        response = await fetch(
          "http://localhost:5000/api/products",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
          }
        );
      }

      const result = await response.json();

      if (result.success) {
        // Clear form
        setFormData({
          name: "",
          category: "",
          price: "",
          quantity: "",
          minStock: "",
        });

        // Exit edit mode
        setEditingId(null);

        // Refresh product list
        fetchProducts();
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Unable to save product. Please check the backend.");
    }
  };

  // Start editing a product
  const handleEdit = (product) => {
    setEditingId(product.id);

    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      minStock: product.minStock,
    });

    // Scroll to the form
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete a product
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (result.success) {
        fetchProducts();
      } else {
        alert(result.message || "Unable to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Unable to delete product. Please check the backend.");
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);

    setFormData({
      name: "",
      category: "",
      price: "",
      quantity: "",
      minStock: "",
    });
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <h1>Inventory Management System</h1>
        <p>Manage your products and stock easily</p>
      </header>

      {/* Dashboard Summary */}
      <main className="dashboard">

        <div className="summary-card">
          <h3>Total Products</h3>
          <p>{products.length}</p>
        </div>

        <div className="summary-card">
          <h3>Low Stock</h3>
          <p>{lowStockProducts.length}</p>
        </div>

        <div className="summary-card">
          <h3>Categories</h3>
          <p>{categories.size}</p>
        </div>

      </main>

      {/* Add / Edit Product Form */}
      <section className="form-section">

        <h2>
          {editingId ? "Edit Product" : "Add New Product"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Product name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            required
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="0"
            required
          />

          <input
            type="number"
            name="minStock"
            placeholder="Minimum stock"
            value={formData.minStock}
            onChange={handleChange}
            min="0"
            required
          />

          <button type="submit">
            {editingId ? "Update Product" : "Add Product"}
          </button>

          {editingId && (
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          )}

        </form>
      </section>

      {/* Product List */}
      <section className="products-section">

        <h2>Products</h2>

        {/* Loading Message */}
        {loading && (
          <p>Loading products...</p>
        )}

        {/* Error Message */}
        {error && !loading && (
          <div className="error-message">
            <p>{error}</p>

            <button onClick={fetchProducts}>
              Try Again
            </button>
          </div>
        )}

        {/* Search and Category Filter */}
        {!loading && !error && (
          <div className="filters">

            <input
              type="text"
              placeholder="Search product by name..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />

            <select
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(event.target.value)
              }
            >
              <option value="All">
                All Categories
              </option>

              {[...categories].map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>

          </div>
        )}

        {/* Products Table */}
        {!loading && !error && (
          <>
            {filteredProducts.length === 0 ? (
              <p>No matching products found.</p>
            ) : (
              <div className="table-container">

                <table>

                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Min Stock</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>

                    {filteredProducts.map((product) => {

                      const isLowStock =
                        product.quantity <= product.minStock;

                      return (
                        <tr
                          key={product.id}
                          className={
                            isLowStock
                              ? "low-stock-row"
                              : ""
                          }
                        >

                          <td>
                            {product.name}
                          </td>

                          <td>
                            {product.category}
                          </td>

                          <td>
                            ₹{product.price}
                          </td>

                          <td>
                            {product.quantity}
                          </td>

                          <td>
                            {product.minStock}
                          </td>

                          <td
                            className={
                              isLowStock
                                ? "status-low-stock"
                                : "status-in-stock"
                            }
                          >
                            {isLowStock
                              ? "Low Stock"
                              : "In Stock"}
                          </td>

                          <td>

                            <button
                              className="edit-button"
                              onClick={() =>
                                handleEdit(product)
                              }
                            >
                              Edit
                            </button>

                            <button
                              className="delete-button"
                              onClick={() =>
                                handleDelete(product.id)
                              }
                            >
                              Delete
                            </button>

                          </td>

                        </tr>
                      );
                    })}

                  </tbody>

                </table>

              </div>
            )}
          </>
        )}

      </section>

    </div>
  );
}

export default App;