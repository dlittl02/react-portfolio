import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css"; 

const Home: React.FC = () => {
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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img
            src="/assets/images/profile.jpg"
            alt="Deasia Little"
            className="profile-image"
          />
          <h1>Hello, I'm Deasia Little</h1>
          <p>Master's Student | Full-Time Professional | Lifelong Learner</p>
          <Link to="/resume" className="btn">View My Resume</Link>
          <Link to="/contact" className="btn">Contact Me</Link>
        </div>
      </section>

      {/* Page Grid Section */}
      <section className="page-grid">
        <h2>Explore My Portfolio</h2>
        <div className="grid-container">
          <Link to="/about" className="grid-item">
            <h3>About Me</h3>
            <p>Learn more about my background, education, and career.</p>
          </Link>
          <Link to="/resume" className="grid-item">
            <h3>Resume</h3>
            <p>View my professional experience and skills.</p>
          </Link>
          <Link to="/projects" className="grid-item">
            <h3>Projects</h3>
            <p>Explore my featured projects and accomplishments.</p>
          </Link>
          <Link to="/interests" className="grid-item">
            <h3>Interests</h3>
            <p>Get to know my hobbies and passions beyond work.</p>
          </Link>
          <Link to="/gallery" className="grid-item">
            <h3>Photo Gallery</h3>
            <p>View photos that capture my journey and interests.</p>
          </Link>
          <Link to="/contact" className="grid-item">
            <h3>Contact</h3>
            <p>Get in touch with me for collaborations or inquiries.</p>
          </Link>
        </div>
      </section>

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

export default Home;
