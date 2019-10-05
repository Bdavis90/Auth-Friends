import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/friends">Friends List</Link>
      </li>
    </ul>
  );
}

export default NavBar;
