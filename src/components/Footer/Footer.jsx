import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <h2>Tech Corner</h2>
      </Link>

      <div className="footer-link">
        <Link to="/">Home</Link>
        <Link to="/status">Status</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/help">Help</Link>
        <Link to="/">Support</Link> */}
      </div>

      <div className="copyright">
        Tech Corner &copy; 2024. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
