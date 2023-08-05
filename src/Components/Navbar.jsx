import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav class="navbar py-3 bg-body-tertiary navbar-bg ">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Navbar</span>
          <ul>
            <li>
              <button type="button" class="btn btn-outline-secondary">
                Sign Up
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}