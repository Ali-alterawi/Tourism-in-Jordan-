import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg  bg-dark text-white">
        <div className="container">
          <a className="navbar-brand text-white fs-1" href="ali">Visit Jordan</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="Main">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="tours">tours</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle bg-dark text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  discover more
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item text-white bg-dark" to="">Action</Link></li>
                  <li><Link className="dropdown-item text-white bg-dark" to="">Another action</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
