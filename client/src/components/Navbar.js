import React from "react";
import { Link as ScrollLink } from 'react-scroll';

function Navbar(){
    return(
        <div>
            <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
        <ul className="navbar-list">
          <li className="navbar-item">
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li className="navbar-item">
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="navbar-item">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
          </ul>
        </div>
      </div>
    </nav>

        </div>
    )
}

export default Navbar