import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Blog.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const EditBlog = () => {
  const { id } = useParams();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch("http://localhost:3000/blogs/" + id, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Could not fetch data");
          }
          console.log("Res ok!");
          return res.json();
        })
        .then((data) => {
          setTitle(data.blog.title);
          setImage(data.blog.image);
          setCategory(data.blog.category);
          setContent(data.blog.content);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const blog = { title, image, category, content };

    try {
      const res = await fetch(`http://localhost:3000/blogs/${id}/edit-blog`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(blog),
      });
      if (!res.ok) {
        throw new Error("Something is wrong!");
      }
      const json = await res.json();
      console.log(json);

      if (res.ok) {
        console.log("Blog is updated!");
      }
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new-blog">
      <h2>Edit your own blog</h2>
      <form onSubmit={handleUpdate}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          cols="70"
          rows="20"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <div className="btn-container">
          <button type="submit" className="btn">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
