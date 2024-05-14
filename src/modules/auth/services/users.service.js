import UserModel from "../models/user.schema.js";

const UserService = {
  getAll: () => {
    return UserModel.find();
  },
  create: (payload) => {
    return new UserModel(payload).save();
  },
  getOne: (id) => {
    return UserModel.findById(id);
  },
  findUsername: ({ username }) => {
    return UserModel.findOne({ username });
  },
  findEmail: ({ email }) => {
    return UserModel.findOne({ email });
  },
  findName: ({ name }) => {
    return UserModel.findOne({ name });
  },
  updateOne: (id, payload) => {
    return UserModel.findOneAndUpdate(id, { $set: payload });
  },
  delete: (id) => {
    return UserModel.findByIdAndDelete(id);
  },
  findUsernameAndUpdate: ({ username }) => {
    return UserModel.findOneAndUpdate({ username }, {new:true});
  },
  findByIdAndUpdate: (id , payload) => {
    return UserModel.findByIdAndUpdate(id , { $set:payload }, {new:true})
  }
};

export default UserService;
