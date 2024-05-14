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
    }
  },
  { timestamps: true }
);

const UserModel = model("users", UserSchema);

export default UserModel;
