import useFetch from "../../useFetch";
import BlogList from "../Blog/BlogList";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, error } = useFetch("http://localhost:3000/");
  return (
    <div className="home">
      
      <div className="link-type">
        <p id="cat-title">Categories</p>
        <li>
          <Link to="#testTech">Technology</Link>
        </li>
        <li>
          <Link to="#testTech">AI</Link>
        </li>
        <li>
          <Link to="#testTech">Web Development</Link>
        </li>
        <li>
          <Link to="#testTech">DSA</Link>
        </li>
        <li>
          <Link to="#testTech">Tips and Tricks </Link>
        </li>
      </div>

      <div className="article">
        {error && <div>{error}</div>}
        {data && <BlogList blogs={data.blogs} />}
      </div>
    </div>
  );
};

export default Home;
