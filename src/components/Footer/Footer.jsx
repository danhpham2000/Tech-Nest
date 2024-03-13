import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <h2>Tech Corner</h2>
      </Link>

      <div className="footer-link">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Footer;
