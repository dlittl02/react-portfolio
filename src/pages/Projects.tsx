import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css"; 


interface Project {
  title: string;
  description: string;
  url: string;
  type: "GitHub" | "Live Demo";
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]); 

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data: Project[]) => setProjects(data)) 
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <>
      {/* Header Section */}
      <header>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/interests">Interests</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Portfolio Section */}
      <main>
        <section className="portfolio-section">
          <section className="hero">
            <div className="hero-content">
              <h1>My Projects</h1>
              <img
                src="/assets/images/code.jpg" 
                alt="Code logo"
                height="250"
                width="250"
              />
              <p>Here are some of the projects I’ve worked on, showcasing my skills in web development, data analysis, and more.</p>
            </div>
          </section>

          {/* Dynamic Project Grid */}
            <div className="page-grid">
            <h2>Explore My Projects</h2>
            <div className="grid-container">
                {projects.length > 0 ? (
                projects.map((project, index) => (
                    <div key={index} className="grid-item">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.type === "GitHub" ? "View on GitHub" : "Live Demo"}
                    </a>
                    </div>
                ))
                ) : (
                <p>Loading projects...</p>
                )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Deasia Little. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/deasia-little"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dlittl02"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
};

export default Projects;
