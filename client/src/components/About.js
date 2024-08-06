import React from "react";

function About() {
  return (
    <div id="about" className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <img
              src="your-image-url.jpg"
              alt="Denis Mwaniki"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-2/3 lg:pl-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h1>
            <h2 className="text-2xl text-gray-700 mb-6">
              Denis Mwaniki - Financial Engineer
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I am a seasoned financial engineer with a deep passion for utilizing data and cutting-edge technology to address complex financial challenges. My expertise lies in quantitative finance, risk management, and financial modeling, where I have successfully driven results in dynamic and fast-paced environments.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Throughout my career, I have developed and implemented advanced financial models that have significantly enhanced decision-making processes for my clients and employers. My ability to blend technical skills with financial acumen allows me to create innovative solutions that optimize financial performance and manage risk effectively.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I am always eager to take on new challenges and collaborate with like-minded professionals to push the boundaries of what is possible in the financial industry.
            </p>
            <div className="mt-6">
              <a
                href="https://portfolio-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                View My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
