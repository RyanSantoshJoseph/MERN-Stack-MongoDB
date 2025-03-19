// Backend: Express.js (server.js)
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Welcome Route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// In-memory user storage
let users = [];
let idCounter = 1;

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Add a new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: idCounter++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const userIndex = users.findIndex((u) => u.id === parseInt(id));
  if (userIndex !== -1) {
    users[userIndex] = { id: parseInt(id), name, email };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Delete a user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((u) => u.id !== parseInt(id));
  res.json({ message: "User deleted successfully" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Frontend: React.js with Tailwind CSS (App.jsx)
import React, { useState } from "react";

const products = [
  { id: 1, name: "Product 1", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: "$30", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: "$40", image: "https://via.placeholder.com/150" }
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="p-4 bg-blue-600 text-white flex justify-between">
        <h1 className="text-lg font-bold">My Store</h1>
      </nav>
      <header className="text-center py-12 bg-blue-300">
        <h2 className="text-3xl font-bold">Welcome to Our Store</h2>
        <p className="text-lg">Find the best products here!</p>
      </header>
      <main className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-lg rounded-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
              <p className="text-blue-600">{product.price}</p>
              <button 
                onClick={() => setSelectedProduct(product)} 
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <p className="text-lg text-blue-600">{selectedProduct.price}</p>
            <button onClick={() => setSelectedProduct(null)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
      )}
      <footer className="p-4 bg-gray-700 text-white text-center">
        <p>Follow us on social media!</p>
      </footer>
    </div>
  );
}
