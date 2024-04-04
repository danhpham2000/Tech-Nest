/* eslint-disable react/prop-types */
import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const { user } = useAuthContext();

  const { data, error } = useFetch("http://localhost:3000/blogs/" + id, {});
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/blogs/${id}/delete-blog`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
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

            {user.user && (
              <div className="blog-setting">
                <Link to={`/blogs/${data.blog._id}/edit-blog`} className="edit">
                  Edit
                </Link>
                <button onClick={handleDelete} className="delete">
                  Delete
                </button>
              </div>
            )}
          </div>
          <div className="blog-meta">
            <ul>
              <li>Published on: </li>
              <p>{data.blog.createdAt.split("T")[0]}</p>
              <li>Category: </li>
              <p>{data.blog.category}</p>
              <li>Written by: </li>
              <p>{data.blog.userId}</p>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default BlogDetails;
