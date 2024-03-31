import { Link } from "react-router-dom";
import "./Navbar.css";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useEffect } from "react";
useEffect;

const Navbar = () => {
  const isAuthenticated = useIsAuthenticated();
  const logOut = useSignOut();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <h1>Tech Nest</h1>
      </Link>
      <div className="nav-link">
        {isAuthenticated && (
          <>
            <Link to="/new-blog">New Blog</Link>
            <button className="logout" onClick={() => handleLogOut()}>
              Log out
            </button>
          </>
        )}
        {!isAuthenticated && (
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
