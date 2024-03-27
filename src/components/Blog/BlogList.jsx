import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p id="category">{blog.category}</p>
            <p id="content">{blog.content}</p>
          </Link>
          <p id="date">
            <strong>Published on: </strong>
            {blog.createdAt.split("T")[0].split("-").reverse().join("-")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
