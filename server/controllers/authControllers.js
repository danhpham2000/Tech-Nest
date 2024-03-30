/* eslint-disable no-undef */
require("dotenv").config({ path: "../.env" });

const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_JWT, { expiresIn: "1d" });
};

module.exports.postSignUp = async (req, res) => {
  const { name, email, password, confirmedPassword } = req.body;

  try {
    if (password !== confirmedPassword) {
      throw Error("Password does not match");
    }

    const exist = await User.findOne({ email });
    if (exist) {
      throw Error("Email already in use!");
    }
    const user = User.create({
      name,
      email,
      password,
    });

    const token = createToken(user._id);
    res.status(201).json({
      message: "User created!",
      user: user._id,
      token: token,
    });
  } catch (err) {
    console.log("Your error: ", err.message);
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("")
    res.status(200).json({
      message: "User login!",
      user: user._id,
      token: token,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.getLogout = async (req, res) => {
  try {
    res.status(200).json({
      message: "You have logout!",
    });
  } catch (err) {
    res.status(400).json({
      message: "You cannot log out!",
    });
  }
};
