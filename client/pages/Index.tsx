import React, { useEffect } from "react";

interface Project {
  name: string;
  image: string;
  github: string;
  description?: string;
}

interface Skill {
  name: string;
  icon: string;
}

export default function Index() {
  // Smooth scrolling function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Sample projects data - easily extensible
  const projects: Project[] = [
    {
      name: "Snake Water Gun using Python and Frontend",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ffead11d773a74808a0ed43cbc03bffc9%2Ffb81a0d583264421bb2181470ed5b9b4?format=webp&width=800",
      github: "https://github.com/shafa7/Python-Project1",
      description:
        "Snake Water Gun using Python (random module, nested if and frontend)",
    },
    {
      name: "Face based attendance system using python and openCV",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Ffead11d773a74808a0ed43cbc03bffc9%2F86de8d1cdf4248488c9eaff3b9f617cc?format=webp&width=800",
      github:
        "https://github.com/shafa7/Attendance-Management-system-using-face-recognition-master",
      description: "Face based attendance system using python and openCV",
    },
  ];

  // Skills data with Font Awesome icons
  const skills: Skill[] = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "React.js", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "GenAI", icon: "fas fa-robot" },
    { name: "Python", icon: "fab fa-python" },
    { name: "Java", icon: "fab fa-java" },
    { name: "Communication", icon: "fas fa-comments" },
    { name: "Leadership", icon: "fas fa-users" },
    { name: "DBMS", icon: "fas fa-server" },
    { name: "Microsoft Copilot", icon: "fab fa-microsoft" },
    { name: "UI/UX", icon: "fas fa-paint-brush" },
    { name: "GCP", icon: "fab fa-google" },
    { name: "AI", icon: "fas fa-brain" },
    { name: "ML", icon: "fas fa-chart-line" },
  ];

  useEffect(() => {
    // Load Google Fonts
    const fontLink = document.createElement("link");
    fontLink.rel = "preconnect";
    fontLink.href = "https://fonts.googleapis.com";
    document.head.appendChild(fontLink);

    const fontLink2 = document.createElement("link");
    fontLink2.rel = "preconnect";
    fontLink2.href = "https://fonts.gstatic.com";
    fontLink2.crossOrigin = "anonymous";
    document.head.appendChild(fontLink2);

    const fontLink3 = document.createElement("link");
    fontLink3.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
    fontLink3.rel = "stylesheet";
    document.head.appendChild(fontLink3);

    // Load Font Awesome
    const faLink = document.createElement("link");
    faLink.rel = "stylesheet";
    faLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(faLink);

    // Load Typed.js
    const typedScript = document.createElement("script");
    typedScript.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
    typedScript.onload = () => {
      // Initialize Typed.js after script loads
      setTimeout(() => {
        if (window.Typed) {
          new window.Typed("#element", {
            strings: [
              "Full Stack Developer",
              "Python Developer",
              "GenAI Engineer",
              "Prompt Engineer.",
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
          });
        }
      }, 100);
    };
    document.head.appendChild(typedScript);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "rgb(1, 1, 27)" }}>
      {/* Navigation Bar */}
      <nav
        className="fixed top-0 w-full backdrop-blur-sm z-50 border-b border-gray-700/20"
        style={{ backgroundColor: "rgb(18, 18, 62)" }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white">
              Shafa's Portfolio
            </div>
            <div className="flex space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Matching the image exactly */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left">
              <div className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                <div className="text-white mb-2">Hi, My name is</div>
                <div
                  className="font-medium mb-4"
                  style={{ color: "rgb(149, 72, 222)" }}
                >
                  Fathima Shafa.
                </div>
                <div className="text-white mb-2">I am a</div>
                <div className="text-white mb-2">passionate</div>
                <div
                  className="font-medium"
                  style={{ color: "rgb(170, 107, 228)" }}
                >
                  <span id="element"></span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-medium">
                  Download Resume
                </button>
                <a
                  href="https://github.com/shafa7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-colors font-medium"
                >
                  Visit GitHub
                </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <img
                  src="https://wallpapers.com/images/featured-full/developer-png-9wxnnbpbatv5o2dn.png"
                  alt="Developer illustration"
                  className="h-auto"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20"
        style={{ backgroundColor: "rgba(1, 1, 27, 0.8)" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a dedicated and creative software developer passionate about
                turning ideas into interactive digital experiences. With a
                strong foundation in front-end and back-end development, I
                strive to build user-friendly and impactful applications.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gray-700 rounded-lg flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ffead11d773a74808a0ed43cbc03bffc9%2F0c40ac75e6a04b9ab8aa30acdbaf3796?format=webp&width=800"
                  alt="Fathima Shafa"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20"
        style={{ backgroundColor: "rgb(1, 1, 27)" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Software Development Intern
              </h3>
              <p className="text-gray-300 mb-2">Tech Company • Summer 2024</p>
              <p className="text-gray-300">
                Developed and maintained web applications using modern
                technologies. Collaborated with senior developers to implement
                new features and optimize existing code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20"
        style={{ backgroundColor: "rgba(1, 1, 27, 0.8)" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <i
                  className={`${skill.icon} text-4xl text-gray-300 group-hover:text-white mb-4`}
                ></i>
                <span className="text-gray-300 group-hover:text-white text-center font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20"
        style={{ backgroundColor: "rgb(1, 1, 27)" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer group"
                onClick={() => window.open(project.github, "_blank")}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description || "Click to view on GitHub"}
                  </p>
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                    <i className="fab fa-github mr-2"></i>
                    <span>View Code</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20"
        style={{ backgroundColor: "rgba(1, 1, 27, 0.8)" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Contact Me
          </h2>
          <div className="flex justify-center space-x-12">
            <a
              href="mailto:fshafa2004@gmail.com"
              className="flex flex-col items-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <i className="fas fa-envelope text-4xl text-gray-300 group-hover:text-white mb-4"></i>
              <span className="text-gray-300 group-hover:text-white font-medium">
                Gmail
              </span>
            </a>
            <a
              href="https://www.instagram.com/fshafaaa_/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <i className="fab fa-instagram text-4xl text-gray-300 group-hover:text-white mb-4"></i>
              <span className="text-gray-300 group-hover:text-white font-medium">
                Instagram
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/fathimashafamajeed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
            >
              <i className="fab fa-linkedin text-4xl text-gray-300 group-hover:text-white mb-4"></i>
              <span className="text-gray-300 group-hover:text-white font-medium">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 border-t border-gray-700"
        style={{ backgroundColor: "#0e0e1a" }}
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300">
            Copyright © shafasportfolio | All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

// Declare Typed for TypeScript
declare global {
  interface Window {
    Typed: any;
  }
}
