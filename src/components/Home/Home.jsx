import { useState } from "react";
import BlogList from "../Blog/BlogList";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: "5d67",
      title: "HTTYD 2",
      body: "12321",
      author: "Danh",
      date: "Feb 12, 2024",
    },
    {
      id: "bca612",
      title: "HTTYD 3",
      body: "Bye Bye Night Fury",
      author: "Danh",
      date: "Feb 12, 2024",
      image: "../../assets/httyd.jpeg",
    },
    {
      id: "bca6333",
      title: "HTTYD 3",
      body: "Bye Bye Night Fury",
      author: "Danh",
      date: "Feb 12, 2024",
      image: "../../assets/httyd.jpeg",
    },
    {
      id: "bca612312",
      title: "HTTYD 3",
      body: "Bye Bye Night Fury",
      author: "Danh",
      date: "Feb 12, 2024",
      image: "../../assets/httyd.jpeg",
    },
    {
      id: "bca6123",
      title: "HTTYD 3",
      body: "Bye Bye Night Fury",
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
    {
      id: "bca61231",
      title: "HTTYD 3",
      body: "Bye Bye Night Fury",
      author: "Danh",
      date: "Feb 12, 2024",
      image: "../../assets/httyd.jpeg",
    },
    {
      id: "bca63",
      title: "HTTYD 3",
      body: "Bye Bye Night Fury",
      author: "Danh",
      date: "Feb 12, 2024",
      image: "../../assets/httyd.jpeg",
    },
    {
      id: "bca62",
      title: "HTTYD 3",
      body: "Bye Bye Night Fury",
      author: "Danh",
      date: "Feb 12, 2024",
      image: "../../assets/httyd.jpeg",
    },
  ]);
  return (
    <div className="home">
      <h2>Latest Blogs</h2>
      <div className="grid-blog">
        <div className="link-type">
          <Link to="">Technology</Link>
          <Link to="#testAI">AI</Link>
          <Link to="#">Web Development</Link>
          <Link to="#">DSA</Link>
          <Link to="#">Tips and Tricks</Link>
        </div>
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
};

export default Home;
