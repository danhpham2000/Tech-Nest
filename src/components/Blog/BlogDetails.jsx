/* eslint-disable react/prop-types */
import { useParams, Link } from "react-router-dom";
import useFetch from "../../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error } = useFetch("http://localhost:3000/blogs/" + id);

  return (
    <>
      {error && <div>{error}</div>}

      {data && (
        <>
          <div className="blog-details">
            <h2>{data.blog.title}</h2>
            <p>{data.blog.content}</p>

            <div className="blog-setting">
              <Link to="/edit-blog" className="edit">
                Edit
              </Link>
              <Link to="/delete-blog" className="delete">
                Delete
              </Link>
            </div>
          </div>
          <div className="blog-meta">
            <ul>
              <li>Published on: </li>
              <p>{data.blog.createdAt.split("T")[0]}</p>
              <li>Category: </li>
              <p>{data.blog.category}</p>
              <li>Written by: </li>
              <p>Danh Pham</p>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default BlogDetails;
