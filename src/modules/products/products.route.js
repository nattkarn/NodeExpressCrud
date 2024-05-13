import express from "express";
import productController from "./controllers/products.controller.js";
import {createValidator} from "express-joi-validation"
import { CreateProductValidator, FindByTitleProductValidator, UpdateProductValidator } from "./controllers/validator/product.validator.js";

const ProductRouter = express.Router();
const validator = createValidator({})

ProductRouter.get("/", productController.getProduct)
ProductRouter.get("/:id", productController.getProductById)
ProductRouter.post("/title", validator.body(FindByTitleProductValidator), productController.findTitleProduct)
ProductRouter.post("/add", validator.body(CreateProductValidator), productController.addProduct) 
ProductRouter.patch("/update/:id", validator.body(UpdateProductValidator), productController.updateProduct)
ProductRouter.delete("/delete/:id", productController.deleteProduct)

export default ProductRouter;
