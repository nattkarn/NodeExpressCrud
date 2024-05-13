import { register } from "prom-client";
import UserService from "../services/users.service.js";
import bcrypt from 'bcryptjs'
import User from '../models/user.schema.js'

const AuthController = {
  getStatus: (req, res) => {
    try {
      res.status(200).json({
        success: true,
        data: {
          data: "UP",
          timestamp: new Date(),
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
  getAll: async (req, res) => {
    const getAll = await UserService.getAll()
    try {
      res.status(200).json({
        success: true,
        data: {
          data: getAll,
          timestamp: new Date(),
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
  userRegister: async (req, res) => {

    
    
    // ToDO: 1. CheckUser
    // console.log(req.body)
    const { username, name, password, email, token } = req.body;

    const userNameCheck = await UserService.findUsername({ username })
    console.log(`userNameCheck: ${userNameCheck}`)
    // ToDO: 2. Encrypt Password

    // ToDO: 3. Save to DB





    // const userRegister = await UserService.create({ username, name, password, email, token })

    try {
      res.status(201).json({
        success: true,
        data: {
          status: "userRegister",
          timestamp: new Date(),
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
  userLogin: async (req, res) => {
    try {
      res.status(200).json({
        success: true,
        data: {
          status: "UP",
          timestamp: new Date(),
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
};
export default AuthController;
