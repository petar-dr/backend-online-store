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
// get the most popular products
app.get("/products/popular", (req, res) => {
  const getMostPopular = products.getMostPopular();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(getMostPopular);
});
// get product by id
app.get("/products/:id", (req, res) => {
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
