const express = require ("express");
const products = require("./products/products");
const app = express();
const port = process.env.SERVER_PORT || 5000;


app.get("/products", (req,res)=>{
    const allProducts = products.getAllProducts();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(allProducts);
});
app.get("/products/:id",(req,res)=>{
    const id = req.params.id;
    res.setHeader("Access-Control-Allow-Origin", "*");
    if(id==undefined){
        res.status(400).json();
    }
    else{
        const product = products.getProductById(id);
        
        if(id==null){
            res.status(404).json();
        }
        else{
            res.status(200).json(product);
        }
    }
})
app.get("/products/popular", (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(getMostPopular);
})
app.listen(port,()=>{
    console.log("Server connected")
})
