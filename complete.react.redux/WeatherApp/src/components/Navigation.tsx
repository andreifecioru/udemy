import React, { Component  } from "react";
import { Link } from "react-router-dom";

import "../styles/navigation.scss";

export class Navigation extends Component<{}, {}> {
  render() {
    return (
      <nav className="nav_bar">
        <ul className="nav_menu">
          <li className="nav_menu_item">
            <Link to="/">Weather app</Link>
          </li>
          <li className="nav_menu_item">
            <Link to="/weather">Get weather</Link>
          </li>
          <li className="nav_menu_item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}