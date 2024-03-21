/* eslint-disable no-undef */
module.exports.getBlogs = (req, res) => {
  res.status(200).json({
    message: "Posts fetched",
  });
};

module.exports.getBlog = (req, res) => {
  const blogId = req.params.blogId;
  console.log("Hello from" + blogId);
};

module.exports.postBlog = (req, res) => {};

module.exports.updateBlog = (req, res) => {};

module.exports.deleteBlog = (req, res) => {};
