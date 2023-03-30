  const mongoose = require("mongoose");
  const express = require("express");
  const productRouter = express.Router();
  const {ProductModel} = require("../model/product.model");
  const {authentication}=require("../middleware/admin.middleware")
 

  productRouter.post("/deal" ,authentication, async(req , res) => {
      try {
           const product = new ProductModel(req.body);
           await product.save();
           console.log(product);
           res.status(200).send({"msg" : " Product data successfully added"})
      }

      catch(err) {
           res.send({"msg" : err.message})
      }
  })
  

    module.exports={productRouter}



