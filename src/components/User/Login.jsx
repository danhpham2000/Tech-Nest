import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  return (
    <div className="login-form">
      <h2>Current Member</h2>
      <form action="/">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" required />

        <button type="submit" className="btn">
          Log in
        </button>

        <div className="new-member">
          Not a TC member? <Link to="/signup">Create account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
