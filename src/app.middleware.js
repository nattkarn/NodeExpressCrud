import express from "express";
import promBundle from "express-prom-bundle";
import cors from "cors"
import RequestInfo from "./modules/middleware/request-info.middleware.js"
import humpMiddleware from "./modules/middleware/hump.middleware.js";



const AppMiddleWare = express.Router();
const metricsMiddleware = promBundle({ includeMethod: true });



AppMiddleWare.use(metricsMiddleware);
AppMiddleWare.use(express.urlencoded({ extended: true }));
AppMiddleWare.use(express.json());
AppMiddleWare.use(cors())
AppMiddleWare.use(RequestInfo())
AppMiddleWare.use(humpMiddleware())

export default AppMiddleWare;