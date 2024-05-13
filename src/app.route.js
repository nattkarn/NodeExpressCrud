import express from "express";
import AppMiddleWare from "./app.middleware.js";



import statusRouter from "./modules/status/status.route.js";

import productRouter from "./modules/products/products.route.js";



const AppRouter = express();
AppRouter.use(AppMiddleWare);
AppRouter.use('/status', statusRouter)
AppRouter.use('/product', productRouter)



export default AppRouter