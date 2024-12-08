import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css"; 


interface Interest {
  title: string;
  description: string;
}

const Interests: React.FC = () => {
  const [interests, setInterests] = useState<Interest[]>([]);

  useEffect(() => {
    fetch("/interests.json")
      .then((response) => response.json())
      .then((data) => setInterests(data.interests))
      .catch((error) => console.error("Error fetching interests:", error));
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

      {/* Main Interests Section */}
      <main>
        <section className="interests-section">
          <section className="hero">
            <div className="hero-content">
              <h1>My Interests</h1>
              <img
                src="/assets/images/interests.jpg" // Adjust the path as needed
                alt="Hobbies logo"
                height="250"
                width="250"
              />
              <p>
                Outside of my professional life, I enjoy exploring hobbies and
                activities that keep me inspired and energized.
              </p>
            </div>
          </section>

          {/* Dynamic Interests Grid */}
            <div className="page-grid">
            <h2>Explore My Interests</h2>
            <div className="grid-container">
                {interests.length > 0 ? (
                interests.map((interest, index) => (
                    <div key={index} className="grid-item">
                    <h3>{interest.title}</h3>
                    <p>{interest.description}</p>
                    </div>
                ))
                ) : (
                <p>Loading interests...</p>
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

export default Interests;
