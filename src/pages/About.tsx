import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css"; 

const About: React.FC = () => {
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
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>About Me</h1>
            <img
                src="/assets/images/about_me.jpg" 
                alt="About me logo"
                height="100"
                width="300"
              />
            <p>
              I’m Deasia Little, a Systems Integration and Test Engineer with a passion for Web Development and Test Automation.
              While working full-time, I’m also pursuing my master’s degree, balancing academic challenges with professional growth.
            </p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="bio-section">
          <h2>My Journey</h2>
          <p>
            My fascination with computer science began at an early age. I honed my interest in high school, attending a magnet program
            specializing in computer science. For my undergraduate studies, I attended the illustrious Tuskegee University, where
            I earned a Bachelor of Science degree in Computer Science in 2017. Since then, my passion has grown into a fulfilling career in
            the defense industry, where I now work as a Test Manager at L3Harris Technologies.
          </p>
          <p>
            My career has been fast-paced and rewarding. As a Systems Integration and Test Engineer, I’ve received accolades such as the
            L3Harris E3 Engineering award. I currently specialize in test engineering and automation, leading efforts to streamline processes
            and achieve significant efficiencies. Simultaneously, I am pursuing a Master’s degree in Software Development at Boston University to further
            enhance my expertise.
          </p>
        </section>

        {/* Education Section */}
        <section className="education-section">
          <h2>Education</h2>
          <ul>
            <li><strong>Master’s Degree in Software Development</strong> – Boston University - MET College, Expected Graduation: 2026</li>
            <li><strong>Bachelor’s Degree in Computer Science</strong> – Tuskegee University, 2017</li>
          </ul>
        </section>

        {/* Career Highlights Section */}
        <section className="career-section">
          <h2>Career Highlights</h2>
          <ul>
            <li>Current Position: Systems Integration and Test Engineer at L3Harris Technologies</li>
            <li>Led the automation of manual web portal testing, saving 1 month of effort across 3 engineering resources and reducing costs by ~$50,000 per month.</li>
            <li>Collaborated with clients to successfully deploy software across multiple releases.</li>
          </ul>
        </section>

        {/* Personal Section */}
        <section className="personal-section">
          <h2>Beyond Work</h2>
          <p>
            Outside of work and academics, I enjoy traveling, cooking, and working out.
            These activities help me maintain balance and foster creativity in my professional and personal life.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Deasia Little. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/deasia-little" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/dlittl02" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </>
  );
};

export default About;
