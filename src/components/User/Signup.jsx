import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    const user = { email, password, confirmedPassword };

    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!res.ok) {
        setError(error);
      }
      const json = await res.json();
      console.log(json);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-form">
      <h2>Become A TN Member</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.password)}
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
