import "../assets/styles/NavbarMenu.css";
// import logo from "../assets/img/logo.svg";
import logo from "../assets/img/pon-logo.png";
import { useState } from "react";

export default function NavbarMenu() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg nav-color">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Plate of Nations logo"
            width="30"
            className="d-inline-block align-text-top"
          />
          <span>Plate of Nations</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span
            className={`fa-solid ${isExpanded ? "fa-times" : "fa-bars"} fa-lg`}
            id="navbar-icon"
          ></span>
        </button>

        <div className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="restaurants">
                Restaurants
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="passport">
                Passport
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="press">
                Press
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}