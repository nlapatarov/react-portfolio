import React from "react";
import "./topbar.scss";


function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={menuOpen ? "topbar " : ("topbar active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <i className="fas fa-user"></i>
            <span>+359 896 86 98 76</span>
          </div>
          <div className="itemContainer">
            <i className="fas fa-envelope"></i>
            <span>nlapatarov92@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
