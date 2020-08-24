import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      }
      else handleShow(false);
    })
    return () => {
      window.addEventListener("scroll");
    }
  }, [])

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tmf-group.com%2F-%2Fmedia%2Fimages%2Flogos%2Fcase-study-logos%2Fnetflix.png&f=1&nofb=1"
        alt="Netflix Logo"
      />

      <div className="nav_Buttons">
        <button className="nav_button">Sign Up</button>
      </div>
    </div>
  );
}

export default Nav;
