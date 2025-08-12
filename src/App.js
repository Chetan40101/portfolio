import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: Persist theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {/* Dark mode toggle button */}
      <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="profile-pic-container">
          <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        </div>
        <h1 className="hero-title">Robin.W</h1>
        <p className="hero-subtitle">Creative Developer & Designer</p>
      </header>

      {/* TILES */}
      <div className="tiles-container">
        <a href="#about" className="tile">
          <h2>About</h2>
          <p>Learn more about my journey, background, and passions.</p>
        </a>
        <a href="#projects" className="tile">
          <h2>Projects</h2>
          <p>Explore my professional work and personal creations.</p>
        </a>
        <a href="#contact" className="tile">
          <h2>Contact</h2>
          <p>Let’s connect — I’d love to hear from you.</p>
        </a>
      </div>

      {/* SECTIONS */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
