import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css"; 

const Resume: React.FC = () => {
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

      {/* Main Content */}
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="resume-section">
              <h1>Resume</h1>
              <img
                src="/assets/images/resume.jpg" 
                alt="Resume logo"
                height="300"
                width="300"
              />
              <p>Below is my professional resume. You can also download it using the link below:</p>
              <a href="/assets/downloads/resume.pdf" download className="btn">Download Resume</a>

              {/* Embedded Resume */}
              <div className="resume-embed">
                <iframe
                  src="/assets/downloads/resume.pdf"
                  frameBorder="0"
                  width="100%"
                  height="600px"
                  title="Resume"
                ></iframe>
              </div>
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
            href="https://github.com/yourprofile"
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

export default Resume;
