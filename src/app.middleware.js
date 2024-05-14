import express from "express";
import promBundle from "express-prom-bundle";
import cors from "cors"
// import RequestInfo from "./modules/middleware/request-info.middleware.js"
// import humpMiddleware from "./modules/middleware/hump.middleware.js";
import morgan from "morgan";
import bodyParser from "body-parser";

const AppMiddleWare = express.Router();
const metricsMiddleware = promBundle({ includeMethod: true });



AppMiddleWare.use(metricsMiddleware);
// AppMiddleWare.use(express.urlencoded({ extended: true }));
// AppMiddleWare.use(express.json());
// AppMiddleWare.use(RequestInfo())
// AppMiddleWare.use(humpMiddleware())
AppMiddleWare.use(cors())

// use morgan. RequestInfo is confusing
AppMiddleWare.use(morgan("dev"))
AppMiddleWare.use(bodyParser.json({ limit: '10mb'}))



export default AppMiddleWare;