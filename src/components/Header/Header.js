import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../contexts/UserContext";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <button onClick={logOut}>Sign Out</button>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">SignUp</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
