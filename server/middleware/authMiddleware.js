/* eslint-disable no-undef */
require("dotenv").config({ path: "../.env" });

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const requireAuth = async (req, res, next) => {
  // verification
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET_JWT);

    req.user = await User.findOne({ _id }).select("_id name");
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Request is not authorized",
    });
  }
};

module.exports = requireAuth;
