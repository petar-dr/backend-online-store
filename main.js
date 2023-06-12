const express = require("express");
const products = require("./products/products");
const app = express();
const port = process.env.SERVER_PORT || 5000;

// get all product
app.get("/products", (req, res) => {
  const allProducts = products.getAllProducts();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(allProducts);
});
// get chairs
app.get("/products/chairs", (req, res) => {
  const getChairs = products.getChairs();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(getChairs);
});

// get tables
app.get("/products/tables", (req, res) => {
  const getTables = products.getTables();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(getTables);
});
// get sofas
app.get("/products/sofas", (req, res) => {
  const getSofas = products.getSofas();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(getSofas);
});
// get top 5 popular products
app.get("/products/popular", (req, res) => {
  const getMostPopular = products.getMostPopular();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(getMostPopular);
});
// get product by id
app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (id == undefined) {
    res.status(400).json();
  } else {
    const product = products.getProductById(id);

    if (id == null) {
      res.status(404).json();
    } else {
      res.status(200).json(product);
    }
  }
});

app.listen(port, () => {
  console.log("Server connected");
});
