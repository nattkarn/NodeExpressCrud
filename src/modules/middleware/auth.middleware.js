import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config();

export async function auth(req, res, next) {
  try {
    const token = req.headers["authtoken"]; //request header
    // console.log(token);
    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }
    const decoded = jwt.verify(token, process.env.SECRETKEY)
    console.log(`decoded: ${decoded}`)
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while processing your request. Token Invalid");
  }
}
