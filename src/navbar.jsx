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
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/About">About <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/cart">Cart <span className="sr-only">(current)</span></Link>
      </li>
      
      <span className="badge badge-primary">{props.count} </span>
    </ul>
    </div>
    </nav>
  );
};

export default NavBar;
