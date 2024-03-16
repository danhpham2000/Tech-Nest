/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link>
            <h3>{blog.title}</h3>
            <p>Written By {blog.author}</p>
          </Link>
          
        </div>
      ))}
    </div>
  );
};

export default BlogList;
