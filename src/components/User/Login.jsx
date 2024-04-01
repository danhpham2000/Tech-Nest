import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleLogin = async (event) => {
    event.preventDefault();

    await login(email, password)
  };
  return (
    <div className="login-form">
      <h2>Current TN Member</h2>
      <form onSubmit={handleLogin}>
        {error && <div className="error">{error}</div>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn">
          Log in
        </button>
      </form>
      <div className="new-member">
        Not a TN member? <Link to="/signup">Create account</Link>
      </div>
    </div>
  );
};

export default Login;
