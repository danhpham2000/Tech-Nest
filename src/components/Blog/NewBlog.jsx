import { useNavigate } from "react-router-dom";
import "./Blog.css";
import { useState } from "react";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const blog = { title, image, category, content };

    try {
      const res = await fetch("http://localhost:3000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
      if (!res.ok) {
        setError(error);
      }
      
      const json = await res.json();
      console.log(json);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new-blog">
      <h2>Write your own blog</h2>
      <form onSubmit={handleSubmit}>
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
          type="file"
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
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
