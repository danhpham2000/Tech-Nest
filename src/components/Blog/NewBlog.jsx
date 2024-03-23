import axios from "axios";
import "./Blog.css";
import { useState } from "react";

const BlogCreate = () => {
  const [blog, setBlog] = useState({
    title: "",
    image: "",
    category: "",
    content: "",
  });

  const handleInput = (event) => {
    setBlog({ ...blog, [event.target.name]: [event.target.event] });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/new-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        console.log("Error occur");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new-blog">
      <h2>Write your own blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" onChange={handleInput} required />

        <label htmlFor="image">Image</label>
        <input type="file" id="file" onChange={handleInput} required />

        <label htmlFor="category">Category</label>
        <input type="text" name="category" onChange={handleInput} required />

        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          cols="70"
          rows="15"
          onChange={handleInput}
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
