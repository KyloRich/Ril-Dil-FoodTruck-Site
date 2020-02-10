import React from "react";
import { Link } from "react-router-dom";

class Navbar2 extends React.Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-lg border-bottom border-white">
        <nav className="container">
          <Link className="my-0 mr-md-auto font-weight-normal" to="/">
            <img src="./images/rildil.svg" height="40" alt="rildil logo"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="mr-1 text-white-50">Menu</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home<span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu<span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" tabIndex="-1">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar2;
