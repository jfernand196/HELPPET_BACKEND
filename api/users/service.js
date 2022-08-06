const {Model} = require("./model");
const modelFoundation = require("../foundations/model");

async function getUserById(id) {
    const user = await Model.findById(id).populate("foundation");
    return user;
  }
  
  async function getUserByEmail(email) {
    const user = await Model.findOne({ email });
    return user;
  }
  
  async function createUser(user) {
    const newUser = await Model.create(user);
    return newUser;
  }
  
  async function updateUser(id, user) {
    const updatedUser = await Model.findByIdAndUpdate(id, user, { new: true });
    return updatedUser;
  }
  
  async function deleteUser(id) {
    const deletedUser = await Model.findByIdAndDelete(id);
    return deletedUser;
  }
  
  async function getAllUsers() {
    const users = await Model.find().populate("foundation").exec();
    return users;
  }
  
  async function findOneUser(query) {
    const user = await Model.findOne(query);
    return user;
  }
  
  module.exports = {
    createUser,
    deleteUser,
    findOneUser,
    getAllUsers,
    getUserByEmail,
    getUserById,
    updateUser,
  };