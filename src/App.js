import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* HERO SECTION */}
      <header className="hero">
        <img
          src="/profile.jpg" // put your image in public/profile.jpg
          alt="Profile"
          className="profile-pic"
        />
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
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm Robin, a passionate developer who loves building elegant and
          functional digital experiences. My work blends creativity with
          precision, aiming for high-quality results in every project.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>
          Here you'll find some of my favorite projects, from websites to web
          applications, all designed to solve problems and create impact.
        </p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Want to work together or just say hello? Drop me a message — I’d love
          to hear from you.
        </p>
      </section>
    </div>
  );
}

export default App;
