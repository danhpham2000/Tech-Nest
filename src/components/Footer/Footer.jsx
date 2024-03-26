import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Link to="/blogs">
        <h2>Tech Nest</h2>
      </Link>

      <div className="footer-link">
        <Link to="/blogs">Home</Link>
        <Link to="/status">Status</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/help">Help</Link>
        <Link to="/support">Support</Link>
      </div>

      <div className="copyright">
        Tech Nest &copy; 2024. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
