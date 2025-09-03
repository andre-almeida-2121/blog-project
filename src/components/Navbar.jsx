import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">📖 BlogFics</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/authors">Main Authors</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="navbar-auth">
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/register" className="btn btn-primary">
          Registrar
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
