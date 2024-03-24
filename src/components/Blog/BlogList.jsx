import { Link } from "react-router-dom";
import "./Blog.css"

/* eslint-disable react/prop-types */

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog._id}>
          <h2>{blog.title}</h2>
          <p>Category: {blog.category}</p>
          <p>{blog.content}</p>
          <p>{blog.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
