/* eslint-disable no-undef */
require("dotenv").config({ path: "../.env" });

const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      message: "Access denied",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_JWT);
    req.userId = decoded.userId;
    req.isLoggedIn = true;
    next();
  } catch (err) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = requireAuth;
