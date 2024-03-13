const Signup = () => {
  return (
    <div className="login-form">
      <h2>Become A Member</h2>
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
      </form>
    </div>
  );
};

export default Signup;
