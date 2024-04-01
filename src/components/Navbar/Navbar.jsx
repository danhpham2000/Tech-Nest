import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import "./Navbar.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <h1>Tech Nest</h1>
      </Link>
      <div className="nav-link">
        {user && (
          <>
            <Link to="/new-blog">New Blog</Link>
            <Link to="/">Welcome, {user.name}</Link>
            <button className="logout" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link className="signup" to="/signup">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
