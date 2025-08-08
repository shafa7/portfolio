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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sample projects data - easily extensible
  const projects: Project[] = [
    {
      name: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      github: "https://github.com/yourusername/portfolio"
    },
    {
      name: "E-commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      github: "https://github.com/yourusername/ecommerce"
    },
    {
      name: "Task Management App",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      github: "https://github.com/yourusername/taskmanager"
    }
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
    { name: "ML", icon: "fas fa-chart-line" }
  ];

  useEffect(() => {
    // Load Font Awesome
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-dark-primary text-light">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-dark-primary/90 backdrop-blur-sm z-50 border-b border-medium">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-light">Portfolio</div>
            <div className="flex space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-light-medium hover:text-light transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-light-medium hover:text-light transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-light-medium hover:text-light transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-light-medium hover:text-light transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-light-medium hover:text-light transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-light">
            Hi, I'm <span className="text-light-medium">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-light-medium max-w-3xl mx-auto">
            Computer Science Undergraduate & Aspiring Software Developer
          </p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-medium hover:bg-medium-dark text-light px-8 py-3 rounded-lg transition-colors font-semibold"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-light-medium text-light-medium hover:bg-light-medium hover:text-dark-primary px-8 py-3 rounded-lg transition-colors font-semibold"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-medium-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-light">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed text-light-medium">
                As a Computer Science undergraduate, I'm passionate about crafting innovative software solutions that make a difference. My journey is driven by the ambition to become a successful software developer, and I'm excited to embrace every learning opportunity. Let's connect and explore the limitless potential of technology together.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-medium rounded-lg flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Profile placeholder"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section (keeping existing if any) */}
      <section className="py-20 bg-dark-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-light">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-medium-dark p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-light mb-2">Software Development Intern</h3>
              <p className="text-light-medium mb-2">Tech Company • Summer 2024</p>
              <p className="text-light-medium">
                Developed and maintained web applications using modern technologies. Collaborated with senior developers to implement new features and optimize existing code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-medium-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-light">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-dark-primary rounded-lg hover:bg-medium transition-colors group"
              >
                <i className={`${skill.icon} text-4xl text-light-medium group-hover:text-light mb-4`}></i>
                <span className="text-light-medium group-hover:text-light text-center font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-primary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-light">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-medium-dark rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all cursor-pointer group"
                onClick={() => window.open(project.github, '_blank')}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-light mb-2">{project.name}</h3>
                  <p className="text-light-medium mb-4">
                    {project.description || "Click to view on GitHub"}
                  </p>
                  <div className="flex items-center text-light-medium group-hover:text-light transition-colors">
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
      <section id="contact" className="py-20 bg-medium-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-light">Contact Me</h2>
          <div className="flex justify-center space-x-12">
            <a
              href="mailto:your.email@gmail.com"
              className="flex flex-col items-center p-8 bg-dark-primary rounded-lg hover:bg-medium transition-colors group"
            >
              <i className="fas fa-envelope text-4xl text-light-medium group-hover:text-light mb-4"></i>
              <span className="text-light-medium group-hover:text-light font-medium">Gmail</span>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-dark-primary rounded-lg hover:bg-medium transition-colors group"
            >
              <i className="fab fa-instagram text-4xl text-light-medium group-hover:text-light mb-4"></i>
              <span className="text-light-medium group-hover:text-light font-medium">Instagram</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-dark-primary rounded-lg hover:bg-medium transition-colors group"
            >
              <i className="fab fa-linkedin text-4xl text-light-medium group-hover:text-light mb-4"></i>
              <span className="text-light-medium group-hover:text-light font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-primary py-8 border-t border-medium">
        <div className="container mx-auto px-6 text-center">
          <p className="text-light-medium">
            © 2024 Your Name. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
