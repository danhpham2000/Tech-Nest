import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <h1>Tech Corner</h1>
      </Link>
      <div className="nav-link">
        <Link to="/new-blog">New Blog</Link>
        <Link to="/login">Login</Link>
        <Link className="signup" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
