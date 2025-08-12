import React, { useState } from "react";
import resumePDF from "../Resume.pdf";
import "./About.css";

const About = () => {
  const [showSkills, setShowSkills] = useState(false);

  const skills = [
    { name: "JavaScript", level: 100 },
    { name: "MongoDB", level: 80 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 100 },
    {name: "Redis", level:70},
    {name: "Kafka", level: 80},
    {name: "Microsoft Azure", level :100},
    {name: "Python", level: 80},
    {name: "Postman", level: 100}
  ];

  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        I am a results-oriented professional with a strong academic foundation,
        graduating with distinction in Mechanical Engineering (CGPA 9.76) and
        maintaining top performance throughout my academic journey.
      </p>
      <p>
        Since 2022, I have been working at Jio Platforms Limited, where I focus
        on building solutions that streamline business processes, improve
        efficiency, and support large user bases.
      </p>
      <p>
        My work has included designing dashboards that reduce manual work and
        create measurable improvements in performance, efficiency, and
        reliability.
      </p>
      <p>
        As a university rank holder and someone who thrives in collaborative
        environments, I take pride in delivering high-quality, impactful work.
      </p>

      <div className="about-buttons">
        <a
          href={resumePDF}
          download="My_Resume.pdf"
          className="download-btn"
        >
          📄 Download Resume
        </a>
        <button
          className="view-skills-btn"
          onClick={() => setShowSkills(true)}
        >
          ⚡ View Skillsets
        </button>
      </div>

      {/* Skills Popup */}
      <div className={`skills-popup ${showSkills ? "show" : ""}`}>
        <div className="skills-popup-content">
          <h3>My Skillsets</h3>
          {skills.map((skill, index) => (
            <div key={index} className="skill-bar">
              <span>{skill.name}</span>
              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="percentage">{skill.level}%</span>
            </div>
          ))}
          <button
            className="close-btn"
            onClick={() => setShowSkills(false)}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
