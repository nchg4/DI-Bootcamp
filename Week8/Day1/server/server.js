const express = require("express");
const { products } = require("../config/data.js");
const bp = require("body-parser");
// console.log(products);

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

/** CRUD
 * Read - get product as query
 */
app.get("/api/products", (req, res) => {
  res.json(products);
});

/**
 * CRUD - C - Create - POST
 * Create a new product
 */
app.post('/api/products', (req, res) => {
  console.log(req.body);
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.json(products);
});

/** params */
app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((item) => item.id == id);
  if (!product) return res.sendStatus(404);
  res.json(product);
});

/** query
 * name - query ip
 */
app.get("/api/search", (req, res) => {
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filtered.length === 0) {
    return res.status(404).json({ msg: "No products match your search!" });
  }
  res.json(filtered);
});



// fetch(url, {
//   method:'POST',
//   headers: {
//     'content-type'
//   }
// })



/**
 * CRUD API
 * Create: POST - create a new product
 * Read: GET - get data params / query
 * Update: PUT - update product
 * Delete: DELETE - delete data
 */