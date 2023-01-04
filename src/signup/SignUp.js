import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (password.length < 6) {
      setError("Password should be 6 charactes or more");
      return;
    }
  };
  return (
    <div className="form-container">
      <h2 className="form-title">SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required></input>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required></input>
        </div>
        <input className="btn-submit" type="submit" value="SignUp"></input>
      </form>
      <p>
        Already have an account <Link to="/login">Log In</Link>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
