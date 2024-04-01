import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../../hooks/useSignUp";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const { signup, error } = useSignUp();

  const handleSignup = async (event) => {
    event.preventDefault();

    await signup(name, email, password, confirmedPassword);
  };

  return (
    <div className="login-form">
      <h2>Become A TN Member</h2>

      <form onSubmit={handleSignup}>
        {error && <div className="error">{error}</div>}

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

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

        <label htmlFor="confirmedPassword">Confirmed Password</label>
        <input
          type="password"
          name="confirmedPassword"
          onChange={(e) => setConfirmedPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn">
          Sign Up
        </button>

        <div className="new-member">
          Already have an TN account? <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
