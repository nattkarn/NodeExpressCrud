import express from "express";
import StatusController from "./controllers/status.controller.js";
const statusRouter = express.Router();


statusRouter.get('/', StatusController.getStatus)

export default statusRouter;
