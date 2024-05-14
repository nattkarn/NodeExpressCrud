import express from "express";
import AuthController from "./controllers/auth.controller.js";
import { auth } from '../middleware/auth.middleware.js'
const AuthRouter = express.Router();

AuthRouter.get("/", AuthController.getStatus)
AuthRouter.post("/get", AuthController.getAll)
AuthRouter.post("/register", AuthController.userRegister)
AuthRouter.post("/login", AuthController.userLogin)
AuthRouter.patch("/update/:id",auth, AuthController.userUpdate)

export default AuthRouter;
