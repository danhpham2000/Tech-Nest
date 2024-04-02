/* eslint-disable no-undef */
require("dotenv").config({ path: "../.env" });

const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  // verification
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const token = authorization.split(" ")[1]

  try {
    jwt.verify(token, process.env.SECRET_JWT);
  }catch(err) {

  }


};

module.exports = requireAuth;
