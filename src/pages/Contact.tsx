import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); 
  const [showForm, setShowForm] = useState(true); 
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateFields = (): boolean => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    // Validate Name
    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate Message
    if (formData.message.trim().length < 2) {
      newErrors.message = "Message must be at least 2 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateFields()) return;

    try {
      const response = await fetch("https://getform.io/f/bdrrxglb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(`Thank you, ${formData.name}! Your message has been successfully submitted.`);
        setShowForm(false);
      } else {
        console.error("Form submission failed:", response.statusText);
        alert("There was an error submitting the form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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

      {/* Contact Section */}
      <main>
        <section className="contact-section">
          <section className="hero">
            <div className="hero-content">
              <h1>Contact Me</h1>
              <img
                src="/assets/images/contact.jpg" 
                alt="Contact logo"
                height="250"
                width="250"
              />
              <p>If you’d like to connect, please fill out the form below. I’ll get back to you as soon as possible!</p>
            </div>
          </section>

          {showForm ? (
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={errors.name ? "invalid" : ""}
              />
              {errors.name && <p className="error">{errors.name}</p>}

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={errors.email ? "invalid" : ""}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className={errors.message ? "invalid" : ""}
              />
              {errors.message && <p className="error">{errors.message}</p>}

              <button type="submit" className="btn">Send Message</button>
            </form>
          ) : (
            <div id="success-message" className="success-message">
              <h2>{successMessage}</h2>
              <p>I'll get back to you soon. Thank you!</p>
            </div>
          )}
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

export default Contact;
