const { Model } = require("./model");
const FoundationModel = require("../foundations/model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  createUser,
  deleteUser,
  findOneUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUser,
} = require("./service");

// login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await Model.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      userType: user.userType,
      idFoundation: user.foundation[0],
    },
    "user",
    { expiresIn: "2h" }
  );
  res.json({
    token: token,
    user: user.email,
    id: user._id,
    userType: user.userType,
    name: user.name,
    idFoundation: user.foundation[0],
  });
};

// register user
exports.registerUser = async (req, res) => {
  console.log(req.body);

  const { name, email, password, userType, photo } = req.body;
  let IdFoundation;
  if (userType === "foundation") {
    const NewFoundation = new FoundationModel.Model({
      name,
      photo,
    });
    await NewFoundation.save();
    IdFoundation = NewFoundation._id;
    const user = await Model.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = new Model({
      email,
      password: hash,
      name,
      userType,
      photo,
      foundation: [IdFoundation],
    });
    await newUser.save().then((response) => res.status(200).json(response));
  } else {
    const user = await Model.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = new Model({
      email,
      password: hash,
      name,
      userType,
      photo,
    });
    await newUser.save().then((response) => res.status(200).json(response));
  }
};

exports.getAllUsers_ = async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json(users);
};

exports.getUserById_ = async (req, res) => {
  console.log("req.params.id", req.params.id);
  const user = await getUserById(req.params.id);
  res.status(200).json(user);
};

exports.updateUser_ = async (req, res) => {
  const { name, email, password, userType, photo } = req.body;
  const user = await updateUser(req.params.id, {
    name,
    email,
    password,
    userType,
    photo,
  });
  res.status(200).json(user);
};
