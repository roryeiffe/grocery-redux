import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Auth">
              Login/Register
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              href="#"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              View Products
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/product/1">
                Chicken
              </Link>
              <Link className="dropdown-item" to="/product/2">
                Vegetable Meals
              </Link>
              <Link className="dropdown-item" to="/product/3">
                Fruits and Vegetables
              </Link>
              <Link className="dropdown-item" to="/product/4">
                Beef
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              View Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
