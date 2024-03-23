import BlogList from "../Blog/BlogList";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2>Latest Blogs</h2>
      <div className="grid-blog">
        <div className="link-type">
          <Link to="#testTech">Technology</Link>
          <Link to="#testAI">AI</Link>
          <Link to="#testWeb">Web Development</Link>
          <Link to="#testDSA">DSA</Link>
          <Link to="#testTips">Tips and Tricks</Link>
        </div>
        {/* {isPending && <div>Loading...</div>} */}
        {/* <BlogList blogs={blogs} /> */}
      </div>
    </div>
  );
};

export default Home;
