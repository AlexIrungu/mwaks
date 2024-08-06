import React from "react";

function Home(){
    return(
        <div id="/" className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="flex items-center">
        {/* Image Section */}
        <div className="w-1/3">
          <img
            src="your-image-url.jpg"
            alt="Denis Mwaniki"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-2/3 pl-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Denis Mwaniki</h1>
          <h2 className="text-xl text-gray-700 mb-4">Financial Engineer</h2>
          <p className="text-gray-600">
            I'm a financial engineer with a passion for using data and technology to solve complex
            financial problems. I have extensive experience in quantitative finance, risk management, 
            and financial modeling.
          </p>
        </div>
      </div>
    </div>
    )
}

export default Home