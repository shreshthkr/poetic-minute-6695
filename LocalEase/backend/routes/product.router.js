const mongoose = require("mongoose");
const express = require("express");
const productRouter = express.Router();
const { ProductModel } = require("../model/product.model");
const { authentication } = require("../middleware/admin.middleware");
const { cloudinary } = require("../utils/cloudinary");


productRouter.post("/addproduct", authentication, async (req, res) => {
     try {
          const { adminID, url, img_src, rating_img_src, rating, heading, category, value_2, price, tag, field } = req.body
         
                    const product = new ProductModel({ adminID, url, img_src, rating_img_src, rating, heading, category, value_2, price, tag, field });
                    await product.save();
                    res.status(200).send({ "msg": " Product data successfully added" })
     }
     catch (err) {
          res.send({ "msg": err.message })
     }
})

productRouter.get("/", async (req, res) => {
     try {
          const category = req.query.category
          console.log(category)
          if (category) {
               const product = await ProductModel.find({ category: category });
               res.status(200).send(product);
          }
          if ((req.query.min) && (req.query.max)) {
               const product = await ProductModel.find({ price: { $gte: Number(req.query.min), $lte: Number(req.query.max) } });
               res.status(200).send(product);
          }

          const product = await ProductModel.find();
          res.status(200).send(product);
     }

     catch (err) {
          res.send({ "msg": err.message })
     }
})

productRouter.delete("/delete/:productID", async (req, res) => {
     const { productID } = req.params;
     console.log(productID);
     try {
          const product = await ProductModel.findByIdAndDelete({ _id: productID });
          res.status(200).send({ "msg": "product deleted successfully" });
     }

     catch (err) {
          res.send({ "msg": err.message })
     }
})

productRouter.patch("/update/:productID", async (req, res) => {
     const { productID } = req.params;
     try {
          const product = await ProductModel.findByIdAndUpdate({ _id: productID }, req.body);
          res.status(200).send({ "msg": "Product Updated successfully" });
     }

     catch (err) {
          res.send({ "msg": err.message })
     }
})


module.exports = { productRouter }



