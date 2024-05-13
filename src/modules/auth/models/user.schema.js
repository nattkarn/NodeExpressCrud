import mongoose from "../../../common/database/mongoose.db.js";

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    email:{
      type: String,
      require: true
    },
    token: {
      type: String,
      default: ""
    },
  },
  { timestamps: true }
);

const UserModel = model("users", UserSchema);

export default UserModel;
