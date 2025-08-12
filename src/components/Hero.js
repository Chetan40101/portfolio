import React from "react";
import "./Hero.css";
import profileImage from "../tom-daley-speaker.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-img-container">
          <img src={profileImage} alt="Profile" className="hero-img" />
        </div>
        <h1>Hi, I'm Robin.W</h1>
        <p>A Passionate Developer & Designer</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
