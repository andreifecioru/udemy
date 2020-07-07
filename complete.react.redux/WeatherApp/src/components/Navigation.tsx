import React, { Component  } from "react";
import { Link } from "react-router-dom";

export class Navigation extends Component<{}, {}> {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Weather App</li>
            <li>
              <Link to="/weather">Get weather</Link>
            </li>
            <li>
              <Link to="/examples">Examples</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <input type="search" placeholder="Enter city name"/>
            </li>
            <li>
              <button type="button" className="button">Search</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const old = (
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