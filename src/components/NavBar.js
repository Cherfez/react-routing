import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact={true} activeStyle={{ color: "yellow" }} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} activeStyle={{ color: "green" }} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} activeStyle={{ color: "red" }} to="/discover">
            Discover
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
