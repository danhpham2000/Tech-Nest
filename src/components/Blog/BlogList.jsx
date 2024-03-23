import { Link, useParams } from "react-router-dom";

/* eslint-disable react/prop-types */

const BlogList = ({ blogs }) => {
  let { blogId } = useParams();
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <Link to="/blogs/:blogId" key={blog.id} className="blog-link">
          <div className="blog-preview">
            <h2>{blog.title} + {blogId}</h2>
            <p>Author: {blog.author}</p>
            <p>
              {blog.body}
            </p>
            <h3>{blog.date}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
