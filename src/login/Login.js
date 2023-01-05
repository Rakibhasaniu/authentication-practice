import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/contexts/UserContext";
import "./Login.css";

const Login = () => {
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required></input>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required></input>
        </div>
        <input className="btn-submit" type="submit" value="Login"></input>
      </form>
      <p>
        New to ema john <Link to="/signup">Create a new account</Link>
      </p>
    </div>
  );
};

export default Login;
