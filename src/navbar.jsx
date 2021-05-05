import React from "react";
import {Link} from 'react-router-dom';
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Navbar
      </a> 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/About">About <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/cart">Cart <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Contact">Contact us <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/Menu">Menu <span className="sr-only"></span></Link>
      </li>
      
      <span className="badge badge-primary">{props.count} </span>
    </ul>
    </div>
    <Link to="/cart">
        <span className="badge badge-primary">
          <i style={{ color: "white" }} className="fas fa-cart-plus"></i>
          {props.count}
        </span>
      </Link>
    </nav>
  );
};

export default NavBar;
