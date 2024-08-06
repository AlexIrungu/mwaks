import React from "react";
import { Link as ScrollLink } from 'react-scroll';

function Navbar(){
    return(
        <div>
            <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div>
          <ScrollLink to="home" smooth={true} duration={500} className="text-white mx-4 cursor-pointer">
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="text-white mx-4 cursor-pointer">
            About
          </ScrollLink>
          <ScrollLink to="project" smooth={true} duration={500} className="text-white mx-4 cursor-pointer">
            Project
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="text-white mx-4 cursor-pointer">
            Contact
          </ScrollLink>
        </div>
      </div>
    </nav>

        </div>
    )
}

export default Navbar