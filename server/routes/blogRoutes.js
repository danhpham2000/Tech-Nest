/* eslint-disable no-undef */
const Router = require("express");
const blogControllers = require("../controllers/blogControllers");
const router = Router();

// Home
router.get("/", blogControllers.getBlogs);

// Sign up
router.get("/signup");
router.post("/signup");

// Login
router.get("/login");
router.post("/login");

// Blog Detail
router.get("/blogs/:blogId");

// New blog
router.get("/new-blog");
router.post("/new-blog");

module.exports = router;
