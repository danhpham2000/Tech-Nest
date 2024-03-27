/* eslint-disable no-undef */
const Router = require("express");
const blogControllers = require("../controllers/blogControllers");
const router = Router();

// Home
router.get("/", blogControllers.getBlogs);

// Blog Detail (GET)
router.get("/blogs/:id", blogControllers.getBlog);

// Create new blog (POST)
router.post("/blogs", blogControllers.postBlog);

// Update blog (PUT)
router.get("/blogs/:id/edit-blog", blogControllers.getBlog);
router.put("/blogs/:id/edit-blog", blogControllers.updateBlog);

// Delete the blog (DELETE)
router.delete("/blogs/:id", blogControllers.deleteBlog);

module.exports = router;
