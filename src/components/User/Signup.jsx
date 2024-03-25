import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="login-form">
      <h2>Become A TN Member</h2>
      <form action="/">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" required />

        <label htmlFor="confirmedPassword">Confirmed Password</label>
        <input type="password" name="confirmedPassword" required />

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
