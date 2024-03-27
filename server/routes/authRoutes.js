const Router = require("express");
const authControllers = require("../controllers/authControllers");

const router = Router();

// Sign Up: POST
router.post("/signup", authControllers.postSignUp);
