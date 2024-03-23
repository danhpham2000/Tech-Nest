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
  const blogId = req.params.blogId;
  console.log("Hello from" + blogId);
};

module.exports.postBlog = async (req, res) => {
  const { title, image, category, content } = req.body;

  const blog = new Blog({
    title: title,
    image: "Dummy image",
    category: category,
    content: content,
  });
  await blog.save();
  res.status(201).json({
    message: "Blog created successfully!",
    blog: blog,
  });
};

module.exports.updateBlog = async (req, res) => {};

module.exports.deleteBlog = async (req, res) => {};
