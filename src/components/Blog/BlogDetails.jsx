/* eslint-disable react/prop-types */
import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";
import { useAuthContext } from "../../hooks/useAuthContext";

const BlogDetails = () => {
  const { id } = useParams();
  const { user } = useAuthContext();

  const { data, error } = useFetch(
    "https://tech-nest-backend.onrender.com/blogs/" + id
  );
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://tech-nest-backend.onrender.com/blogs/${id}/delete-blog`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error("Unauthorized");
      }
      const json = await res.json();
      console.log(json);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {error && <div>{error}</div>}

      {data && (
        <>
          <div className="blog-details">
            <h2>{data.blog.title}</h2>
            <p>{data.blog.content}</p>

            {user
              ? data.blog.author === user.user && (
                  <div className="blog-setting">
                    <Link
                      to={`/blogs/${data.blog._id}/edit-blog`}
                      className="edit"
                    >
                      Edit
                    </Link>
                    <button onClick={handleDelete} className="delete">
                      Delete
                    </button>
                  </div>
                )
              : ""}
          </div>
          <div className="blog-meta">
            <ul>
              <li>Published on: </li>
              <p>
                {data.blog.createdAt
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-")}
              </p>
              <li>Category: </li>
              <p>{data.blog.category}</p>
              <li>Written by: </li>
              <p>{data.name.name}</p>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default BlogDetails;
