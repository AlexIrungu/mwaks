import React from "react";

function About() {
  const skills = [
    { category: "Financial Analysis", items: ["Risk Management", "Portfolio Optimization", "Quantitative Modeling"] },
    { category: "Technical", items: ["Python", "R", "SQL", "Machine Learning"] },
    { category: "Certifications", items: ["CFA", "FRM", "Financial Engineering Certificate"] }
  ];

  return (
    <div id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Turning Complex Financial Data into 
                <span className="text-blue-600"> Actionable Insights</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With over a decade of experience in financial engineering, I specialize in developing 
                sophisticated quantitative models and risk management solutions for complex financial 
                instruments.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skillSet) => (
                  <div key={skillSet.category} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillSet.category}</h3>
                    <ul className="space-y-2">
                      {skillSet.items.map((item) => (
                        <li key={item} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">Senior Financial Engineer</p>
                    <p className="text-blue-600">Major Investment Bank</p>
                    <p className="text-gray-600">2018 - Present</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">Quantitative Analyst</p>
                    <p className="text-blue-600">Global Asset Management Firm</p>
                    <p className="text-gray-600">2015 - 2018</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">MSc in Financial Engineering</p>
                    <p className="text-blue-600">Top University</p>
                    <p className="text-gray-600">2015</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">BSc in Mathematics</p>
                    <p className="text-blue-600">Premier University</p>
                    <p className="text-gray-600">2013</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;