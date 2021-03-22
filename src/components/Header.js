import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
      {/* <img
            src="https://i.ibb.co/z5g62xh/Screen-Shot-2021-03-11-at-9-17-50-AM.png"
            alt="logooooo"
            width="auto"
            height="100rem"
            classname="logologo"
            border-radius= "5px;"
          /> */}
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
                <Link to="/home">Home</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/favorite_songs">Favorite Songs</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/record">Record</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/find_karaoke">Find Karaoke</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/practice">Practice</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/login">Log Out</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;