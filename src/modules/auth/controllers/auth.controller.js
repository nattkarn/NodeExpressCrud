import UserService from "../services/users.service.js";
import bcrypt from "bcryptjs";
import User from "../models/user.schema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

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
    const getAll = await UserService.getAll();
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
    const { username, name, password, email } = req.body;
    const userNameCheck = await UserService.findUsername({ username });
    const emailCheck = await UserService.findEmail({ email });

    if (userNameCheck) {
      return res.status(400).send(`User is already`);
    }
    if (emailCheck) {
      return res.status(400).send(`Email is already`);
    }
    // ToDO: 2. Encrypt Password
    const salt = await bcrypt.genSalt(10);
    var user = new User({
      username,
      name,
      password,
      email,
    });

    user.password = await bcrypt.hash(password, salt);

    // ToDO: 3. Save to DB
    try {
      await user.save();
      res.status(200).send(`register success`);
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  },
  userLogin: async (req, res) => {
    //TODO: 1. Check User Password
    const { username, password } = req.body;
    var user = await UserService.findUsernameAndUpdate({ username });
    console.log(`user: ${user}`);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).send("Password Incorrect");
      } else {
        //TODO: 2. Create Payload
        var payload = {
          success: true,
          timestamp: new Date(),
          user: {
            username: user.username,
            name: user.name,
            email: user.email,
          },
        };
        //TODO: 3. Generate Token
        //payload to hash, private key, expiresIn:sec
        jwt.sign(
          payload,
          process.env.SECRETKEY,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) {
              throw err;
            }
            res.status(200).json({ data: { token: token } });
          }
        );
      }
    } else {
      return res.status(400).send("User not found");
    }
  },
  userUpdate: async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const filter = { _id: id };
    const update = { name, email };
    console.log(`id: ${id}`);
    try {
      var user = await UserService.getOne(filter);
      if (user) {
        const updated = await UserService.findByIdAndUpdate(filter, update);
        const getData = await UserService.getOne(filter);
        res.status(200).json({
          success: true,
          timestamp: new Date(),
          data: {
            result: getData,
          },
        });
      } else {
        res.status(400).json({
          success: true,
          timestamp: new Date(),
          data: {
            result: "User not found",
          },
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  },
};
export default AuthController;
