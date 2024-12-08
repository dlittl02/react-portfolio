import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css"; 

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      title: "Travel",
      thumbnail: "/assets/images/travel-thumbnail.jpg",
      fullImage: "/assets/images/travel.jpeg",
    },
    {
      title: "Pets",
      thumbnail: "/assets/images/pets-thumbnail.jpg",
      fullImage: "/assets/images/pets.jpg",
    },
    {
      title: "Family",
      thumbnail: "/assets/images/family-thumbnail.jpg",
      fullImage: "/assets/images/family.jpg",
    },
    {
      title: "Work",
      thumbnail: "/assets/images/worl-thumbnail.jpg",
      fullImage: "/assets/images/work.jpg",
    },
  ];

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

      {/* Gallery Section */}
      <main>
        <section className="gallery-section">
          <section className="hero">
            <div className="hero-content">
              <h1>Photo Gallery</h1>
              <p>Hover over each square to view the photos!</p>
            </div>
          </section>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="gallery-item"
                style={{ backgroundImage: `url(${item.thumbnail})` }}
              >
                <div className="overlay">
                  <h2>{item.title}</h2>
                </div>
                <div
                  className="hover-image"
                  style={{ backgroundImage: `url(${item.fullImage})` }}
                ></div>
              </div>
            ))}
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

export default Gallery;
