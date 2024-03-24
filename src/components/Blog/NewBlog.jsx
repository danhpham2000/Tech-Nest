import "./Blog.css";
import { useState } from "react";

const BlogCreate = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const blog = { title, image, category, content };

    try {
      const res = await fetch("http://localhost:3000/new-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
      const json = await res.json();
      console.log(json);
      if (!res.ok) {
        setError(error);
      }
      if (res.ok) {
        console.log("New blog added");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new-blog">
      <h2>Write your own blog</h2>
      <form action="/" onSubmit={handleSubmit}>
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
          rows="15"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="btn">
          Publish
        </button>
      </form>
    </div>
  );
};

export default BlogCreate;
