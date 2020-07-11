import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap";
import "./style.css";

function Navbar() {
  const location = useLocation();
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/"
          className={
            location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/"
          className={
            location.pathname === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
