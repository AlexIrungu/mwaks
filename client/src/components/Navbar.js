import React from "react";

function Navbar(){
    return(
        <div>
            <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="/" className="text-white mx-4">Home</a>
          <a href="/about" className="text-white mx-4">About</a>
          <a href="/contact" className="text-white mx-4">Contact</a>
        </div>
      </div>
    </nav>

        </div>
    )
}

export default Navbar