import { useState } from "react";
import BlogList from "../Blog/BlogList";
import "./Home.css";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: "5d67",
      title: "HTTYD 2",
      body: "12321",
      author: "Danh",
    },
    {
      id: "bca6",
      title: "HTTYD 3",
      body: "Bye Bye Night Fury",
      author: "Danh",
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="Latest Blogs" />
    </div>
  );
};

export default Home;
