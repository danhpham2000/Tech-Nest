import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const user = { email, password };

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(user),
      });
      const json = await res.json();

      if (!res.ok) {
        console.log(json);
        setError(json.message);
      }
      if (res.ok) {
        console.log(json);
        console.log(json.token);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
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
