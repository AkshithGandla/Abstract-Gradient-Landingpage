import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../utils/logo.png";

import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [section, setSection] = useState("home");

  return (
    <div className="SPA__navbar">
      <div className="SPA__navbar-links">
        <div className="SPA__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="SPA__navbar-links_container">
          <p>
            <a
              className={section === "home" ? "active__section" : ""}
              onClick={() => setSection("home")}
              href="#home"
            >
              Home
            </a>
          </p>
          <p>
            <a
              className={section === "company" ? "active__section" : ""}
              onClick={() => setSection("company")}
              href="#company"
            >
              Company
            </a>
          </p>
          <p>
            <a
              className={section === "team" ? "active__section" : ""}
              onClick={() => setSection("team")}
              href="#team"
            >
              Team
            </a>
          </p>
          <p>
            <a
              className={section === "about" ? "active__section" : ""}
              onClick={() => setSection("about")}
              href="#about"
            >
              About
            </a>
          </p>
        </div>
      </div>
      <div className="SPA__navbar-sign">
        <p>Sign in</p>
        <button type="button">Join Now</button>
      </div>
      <div className="SPA__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="SPA__navbar-menu_container scale-up-center">
            <div className="SPA__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#Company">Company</a>
              </p>
              <p>
                <a href="#Team">Team</a>
              </p>
              <p>
                <a href="#About">About</a>
              </p>
            </div>
            <div className="SPA__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Join Now</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
