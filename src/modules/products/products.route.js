import express from "express";
import productController from "./controllers/products.controller.js";
import {createValidator} from "express-joi-validation"
import { CreateProductValidator, FindByTitleProductValidator, UpdateProductValidator } from "./controllers/validator/product.validator.js";
import { auth } from '../middleware/auth.middleware.js'
import {upload} from '../middleware/uploadFile.middleware.js'

const ProductRouter = express.Router();
const validator = createValidator({})




ProductRouter.get("/",auth , productController.getProduct)
ProductRouter.get("/:id",auth , productController.getProductById)
ProductRouter.post("/title",auth , validator.body(FindByTitleProductValidator), productController.findTitleProduct)
ProductRouter.post("/add",auth ,upload , productController.addProduct) 
ProductRouter.patch("/update/:id",auth , validator.body(UpdateProductValidator), productController.updateProduct)
ProductRouter.delete("/delete/:id",auth , productController.deleteProduct)

export default ProductRouter;
