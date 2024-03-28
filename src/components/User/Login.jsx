import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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
      if (!res.ok) {
        setError(error);
        console.log(user);
      }
      const json = await res.json();
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login-form">
      <h2>Current TN Member</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
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
