/* eslint-disable react/prop-types */

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Author: {blog.author}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            aliquid quod quo asperiores minus quis autem tempore illo, optio um.
          </p>
          <h3>{blog.date}</h3>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
