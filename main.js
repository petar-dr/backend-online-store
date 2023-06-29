const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

mongoose.connect('mongodb://127.0.0.1:27017/usersData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const JWT_SECRET = 'nnknjbh';
const User = require("./model/mongoShema");
const bcrypt = require("bcrypt");

const products = require("./products/products");
const app = express();
const port = 5000;
app.use(cors({
  origin: '*'
}));
app.use(bodyParser.json());
//Sing up
app.post("/registration", async (req, res) => {
  const { username, email, password: plainTextPassword } = req.body;
  // if (!username || typeof username !== "string") {
  //   return res.json({ status: 'error', error: "Invalid username" });
  // }
  // if (!plainTextPassword || typeof plainTextPassword !== "string") {
  //   return res.json({ status: 'error', error: "Invalid password" });
  // }
  // if (plainTextPassword.length < 5) {
  //     return res.json({ status: "error", error: "Password is too small, use 6 characters" })
  // }
  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({ username, email, password });
    console.log("User created successfully", response)
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: "error", error: "Username in use!" })
    }
    throw error;
  }
  res.json({ status: "ok" });
})



//API

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
