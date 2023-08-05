import React from "react";
import "./NavbarHome.css";

export default function Navbar() {
  return (
    <>
      <nav class="navbar py-3 bg-body-tertiary navbar-bg ">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Campaign+</span>
          <ul>
            <li>
              <button type="button" class="btn">
                Home
              </button>
              <button type="button" class="btn">
                Get in Touch
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}