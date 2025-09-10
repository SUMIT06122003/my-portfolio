import React from "react";

export default function Projects() {
  const sectionStyle = {
    textAlign: "center",
    padding: "80px 20px",
    backgroundColor: "#1e1e1e",
    color: "white",
  };

  const headingStyle = {
    marginBottom: "40px",
    fontSize: "28px",
    color: "#4cafef",
  };

  const projectStyle = {
    marginBottom: "30px",
    padding: "20px",
    border: "1px solid #333",
    borderRadius: "10px",
    maxWidth: "800px",
    margin: "0 auto 30px auto",
    backgroundColor: "#2a2a2a",
    textAlign: "left",
  };

  const linkStyle = {
    color: "#4cafef",
    textDecoration: "none",
    marginRight: "15px",
  };

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={headingStyle}>My Projects</h2>

      {/* Project 1 */}
      <div style={projectStyle}>
        <h3>CustomX App (React + Firebase + Capacitor)</h3>
        <p>
          Built both <strong>Admin Panel</strong> and <strong>Player Panel</strong> 
          for Free Fire paid tournaments and matches. Also created{" "}
          <strong>CustomX 2.0</strong> with better UI and a KYC panel.
        </p>
        <p>
          <em>(Contact me for source code)</em>
        </p>
        <a href="https://customx-1.netlify.app/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          APK Demo
        </a>
      </div>

      {/* Project 2 */}
      <div style={projectStyle}>
        <h3>Expense Tracker App</h3>
        <p>
          A simple expense tracker with full CRUD functionality, built with React and Firebase, and exported as an APK.
        </p>
        <a href="https://github.com/SUMIT06122003/expense-tracker" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          GitHub
        </a>
        <a href="https://expense-tracker-bysumit.netlify.app/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Live Demo
        </a>
      </div>

      {/* Project 3 */}
      <div style={projectStyle}>
        <h3>CodexIntern Internship Project</h3>
        <p>
          Created the testing <strong>CodexIntern</strong> website during my frontend internship.
        </p>
        <a href="https://github.com/SUMIT06122003/codexintern" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          GitHub
        </a>
        <a href="https://codexintern.netlify.app/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Live Demo
        </a>
      </div>

      {/* Project 4 */}
      <div style={projectStyle}>
        <h3>Portfolio Website</h3>
        <p>
          Designed and developed my own responsive portfolio website to showcase my skills and projects.
        </p>
        <a href="https://my-portfoilio-sumit.netlify.app/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Live Demo
        </a>
      </div>

      {/* Project 5 */}
      <div style={projectStyle}>
        <h3>College Projects</h3>
        <p>
          Worked on multiple projects including:
          <ul>
            <li>Quiz App</li>
            <li>Simple Calculator</li>
            <li>Shoes Shopping Website</li>
            <li>Book Store Management System</li>
          </ul>
        </p>
      </div>

      {/* Project 6 */}
      <div style={projectStyle}>
        <h3>Smart Travel Assistance (Ongoing)</h3>
        <p>
          Currently developing a <strong>Smart Travel Assistance</strong> system 
          as my final year major project.
        </p>
      </div>
    </section>
  );
}
