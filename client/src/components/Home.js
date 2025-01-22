// Home.js
import React from "react";
import { Camera } from "lucide-react";

function Home() {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Denis Mwaniki
              <span className="block text-blue-600 mt-2">Financial Engineer</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transforming complex financial challenges into elegant solutions through 
              data-driven analysis and innovative technology.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Projects
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Contact Me
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mb-12 lg:mb-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-blue-100 flex items-center justify-center">
                <Camera size={48} className="text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold text-gray-900">10+ Years Experience</p>
                <p className="text-sm text-gray-600">in Financial Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;