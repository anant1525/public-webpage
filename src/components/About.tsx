import React from "react";
import { FaAward, FaCode, FaCogs, FaLanguage } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <p className="text-lg text-gray-400 mb-6">
              I am a passionate and experienced Lead Architect with a strong
              background in designing and implementing scalable and resilient
              systems. My expertise lies in the domains of Fault Management,
              Inventory, and Monitoring, where I have successfully led teams in
              developing robust SOA, Microservices, and API-based solutions. I
              thrive on solving complex challenges and am always eager to
              explore new technologies and methodologies to drive innovation.
            </p>
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <div className="relative">
              <div className="border-l-2 border-gray-700 pl-8">
                <div className="mb-8">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-500 rounded-full h-4 w-4 mr-4"></div>
                    <h4 className="text-xl font-bold">Lead Architect</h4>
                  </div>
                  <p className="text-gray-400">2020 - Present</p>
                  <p className="text-gray-400">
                    Leading the design and development of next-generation fault
                    and inventory management systems.
                  </p>
                </div>
                <div className="mb-8">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-500 rounded-full h-4 w-4 mr-4"></div>
                    <h4 className="text-xl font-bold">Senior Developer</h4>
                  </div>
                  <p className="text-gray-400">2017 - 2020</p>
                  <p className="text-gray-400">
                    Developed and maintained microservices for the monitoring
                    platform, ensuring high availability and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <FaLanguage className="text-4xl text-blue-500 mb-4" />
                <h4 className="text-xl font-bold mb-2">Languages</h4>
                <ul className="text-gray-400">
                  <li>Java</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Go</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <FaCode className="text-4xl text-blue-500 mb-4" />
                <h4 className="text-xl font-bold mb-2">Frameworks</h4>
                <ul className="text-gray-400">
                  <li>Spring Boot</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <FaCogs className="text-4xl text-blue-500 mb-4" />
                <h4 className="text-xl font-bold mb-2">Tools</h4>
                <ul className="text-gray-400">
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Jenkins</li>
                  <li>Git</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <FaAward className="text-4xl text-blue-500 mb-4" />
                <h4 className="text-xl font-bold mb-2">Certifications</h4>
                <ul className="text-gray-400">
                  <li>AWS Certified Solutions Architect</li>
                  <li>Certified Kubernetes Administrator</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
