import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import "./Navbar.css";

const Navbar = () => {
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <h1>Tech Nest</h1>
      </Link>
      <div className="nav-link">
        <Link to="/new-blog">New Blog</Link>
        <button className="logout" onClick={handleLogout}>
          Log out
        </button>

        <Link to="/login">Login</Link>
        <Link className="signup" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
