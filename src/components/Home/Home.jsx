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
      date: "Feb 12, 2024",
      image: "../../assets/httyd.jpeg",
    },
    {
      id: "bca6",
      title: "HTTYD 3",
      body: "Bye Bye Night Fury",
      author: "Danh",
      date: "Feb 12, 2024",
      image: "../../assets/httyd.jpeg",
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="Latest Blogs" />
    </div>
  );
};

export default Home;
