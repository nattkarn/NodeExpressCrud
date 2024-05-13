import express from "express";
import AuthController from "./controllers/auth.controller.js";

const AuthRouter = express.Router();

AuthRouter.get("/", AuthController.getStatus)
AuthRouter.post("/get", AuthController.getAll)
AuthRouter.post("/register", AuthController.userRegister)
AuthRouter.post("/login", AuthController.userLogin)

export default AuthRouter;
