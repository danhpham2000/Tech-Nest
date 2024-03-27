/* eslint-disable no-undef */

const Blog = require("../models/blog");

module.exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      message: "Posts fetched",
      blogs: blogs,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.getBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      throw new Error("Blog is not found!");
    }
    res.status(200).json({
      message: "Blog fetched!",
      blog: blog,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.postBlog = async (req, res) => {
  try {
    const { title, image, category, content } = req.body;

    const blog = new Blog({
      title: title,
      image: image,
      category: category,
      content: content,
    });
    await blog.save();
    res.status(201).json({
      message: "Blog created successfully!",
      blog: blog,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports.updateBlog = async (req, res) => {
  try {
    const { title, image, category, content } = req.body;
    const blogId = req.params.id;
    const blog = await Blog.findByIdAndUpdate(blogId, {
      title: title,
      image: image,
      category: category,
      content: content,
      updatedAt: Date.now(),
    });
    if (!blog) {
      throw new Error("Blog is not found to edit");
    }
    res.status(201).json({
      message: "Blog updated!",
      blog: blog,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findByIdAndDelete(blogId);
    if (!blog) {
      throw new Error("Blog is not found!");
    }
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};
