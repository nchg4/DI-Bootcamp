const express = require("express");
const { products } = require("./config/data.js");
// const bp = require("body-parser")
// console.log(products);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log(__dirname + "/public");

app.use("/", express.static(__dirname + "/public"));

app.listen(5000, () => {
  console.log("run on 5000");
});

/**
 * CRUD API
 * Create: POST - create a new product
 * Read: GET - get data params / query
 * Update: PUT - update product
 * Delete: DELETE - delete data
 */

/** Rest API */

/** CRUD - D - Delete - delete
 *
 * delete one product - id -> req.params
 *
 */
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "not found" });
  }

  products.splice(index, 1);

  res.json(products);
});

/**
 * CRUD - U - Update - PUT
 * Update a product
 * id - req.params
 * name, price - req.body
 */
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const index = products.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "not found" });
  }

  products[index] = {
    ...products[index],
    name,
    price,
  };

  res.json({ products, msg: "ok", status: 111, active: true });
});

/**
 * Create - POST - create/insert a new product
 */
app.post("/api/products", (req, res) => {
  // console.log(req.body);
  // const { name, price } = req.body;
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.json(products);
});

/** CRUD
 * Read - get all products
 */
app.get("/api/products", (req, res) => {
  res.json(products);
});

/** CRUD
 * Read - get one product with params
 */
app.get("/api/products/:id", (req, res) => {
  //   console.log(req.params);
  const { id } = req.params;
  const product = products.find((item) => item.id == id);
  if (!product) return res.sendStatus(404);
  res.json(product);
});

/** CRUD
 * Read - get product as the query
 */
app.get("/api/search", (req, res) => {
  //   console.log(req.query);
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filtered.length === 0) {
    return res.status(401).json({ msg: "no product matche your search!" });
  }
  res.json(filtered);
});

// fetch(url, {
//   method:'POST',
//   headers: {
//     'content-type':'application/json'
//   },
//   body: JSON.stringify({name:'iCar', price:10000})
// })
