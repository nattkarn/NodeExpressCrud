import express from "express";

import statusRouter from "./modules/status/status.route.js";
import AppMiddleWare from "./app.middleware.js";


const AppRouter = express();
AppRouter.use(AppMiddleWare);
AppRouter.use('/status', statusRouter)



export default AppRouter