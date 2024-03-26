/* eslint-disable no-undef */
const Router = require("express");
const blogControllers = require("../controllers/blogControllers");
const router = Router();

// Home
router.get("/", blogControllers.getHome);

router.get("/blogs", blogControllers.getBlogs);

// Sign up
router.get("/signup");
router.post("/signup");

// Login
router.post("/login");

// Blog Detail
router.get("/blogs/:id", blogControllers.getBlog);

// New blog
router.post("/new-blog", blogControllers.postBlog);

// Update blog

module.exports = router;
