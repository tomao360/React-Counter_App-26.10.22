import React from "react";
import "./navbar.css";

export const Navbar = ({ total }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  my-nav-bar">
        <div>
          <span className="total btn-primary btn">{total}</span>
        </div>
      </nav>
    </>
  );
};
