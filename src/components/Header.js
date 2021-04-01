import React from "react";
import { Link } from "react-router-dom";

function Header({ handleLogout }) {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
      {/* <h1>miku</h1> */}
      <img
            src="https://i.ibb.co/z5315Pj/Screen-Shot-2021-04-01-at-1-46-07-AM.png"
            alt="logo"
            width="auto"
            height="75rem"
            classname="miku-logo"
          />
        {/* <a href="" className="navbar-brand" href="#">
          <img src="https://i.ibb.co/z5g62xh/Screen-Shot-2021-03-11-at-9-17-50-AM.png" alt="logo" width="auto"
            height="60rem" />
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <Link to="/landingpage">home</Link>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <Link to="/home">find a song</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/pitchpage">range finder</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/favorite_songs">favorite songs</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/record">record</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/find_karaoke">find karaoke</Link>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/practice">Practice</Link>
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/login" onClick={handleLogout}>log out</Link>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;