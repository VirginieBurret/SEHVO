import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h1 className="logo__title">RIDE THE WORLD</h1>
          </Link>
        </div>

        <div className="navLinks">
          <p className="link">VOYAGEURS</p>
          <p className="link">ACTIVITÉS</p>
          <p className="link">LIEUX</p>
        </div>

        <div className="right">
          <Link to="/members">
            <button className="private">ESPACE MEMBRE</button>
          </Link>

          <div className="languages">
            <img
              className="icon_language"
              src={`${process.env.PUBLIC_URL}/images/language/english.png`}
              alt="english flag icon language"
            />
            <img
              className="icon_language"
              src={`${process.env.PUBLIC_URL}/images/language/french.png`}
              alt="french flag icon language"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
