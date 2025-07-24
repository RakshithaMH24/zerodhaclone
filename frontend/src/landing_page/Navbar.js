import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-white border-bottom " style={{backgroundColor:"#FFF"}}>
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
         <img src="media/logo.svg"  style={{ width: "25%"}}alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="signup">
                  Signup
                </Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/products">
                  Product   
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active"aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active"aria-current="page" to="/Support">
                  Support
                </Link>
              </li>
             
             </ul>    
           </form>
          </div>
        </div>
      </nav>
   
  );
}

export default Navbar;
