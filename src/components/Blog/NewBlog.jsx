import "./Blog.css";

const BlogCreate = () => {
  return (
    <div className="new-blog">
      <h2>Write your own blog</h2>
      <form action="form-blog">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" required />

        <label htmlFor="image">Image</label>
        <input type="file" id="file" required />

        <label htmlFor="category">Category</label>
        <select name="category" id="category" required>
          <option value="AI">AI</option>
          <option value="Programming">Programming</option>
          <option value="DSA">DSA</option>
          <option value="Web Development">Web Development</option>
        </select>

        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          cols="70"
          rows="15"
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
