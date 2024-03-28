/* eslint-disable no-undef */
const Router = require("express");
const authControllers = require("../controllers/authControllers");

const router = Router();

// Sign Up: POST
router.post("/signup", authControllers.postSignUp);

// Login: POST
router.post("/login", authControllers.postSignUp);

module.exports = router;
