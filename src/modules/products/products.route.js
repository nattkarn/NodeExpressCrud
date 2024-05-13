import express from "express";
import productController from "./controllers/products.controller.js";


const ProductRouter = express.Router();


ProductRouter.get('/', productController.getProduct)

export default ProductRouter;
