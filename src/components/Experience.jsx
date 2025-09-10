import React from "react";

export default function Experience() {
  const sectionStyle = {
    textAlign: "center",
    padding: "80px 20px",
    backgroundColor: "#121212",
    color: "white",
  };

  const headingStyle = {
    marginBottom: "40px",
    fontSize: "28px",
    color: "#4cafef",
  };

  const expStyle = {
    marginBottom: "30px",
    padding: "20px",
    border: "1px solid #333",
    borderRadius: "10px",
    maxWidth: "800px",
    margin: "0 auto 30px auto",
    backgroundColor: "#1e1e1e",
    textAlign: "left",
  };

  const linkStyle = {
    color: "#4cafef",
    textDecoration: "none",
    marginRight: "15px",
  };

  return (
    <section id="experience" style={sectionStyle}>
      <h2 style={headingStyle}>Experience</h2>

      <div style={expStyle}>
        <h3>Frontend Development Intern – CodexIntern</h3>
        <p>
          Completed a <strong>1-month internship</strong> at CodexIntern where I
          gained real-world experience in <strong>Frontend Development</strong>.
        </p>
        <p>
          My main task was to build a website similar to{" "}
          <strong>Coding Ninjas</strong> for CodexIntern. This helped me improve
          my skills in <strong>React, responsive design, and UI development</strong>.
        </p>
        <p>
          <a
            href="https://github.com/SUMIT06122003/codexintern"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            GitHub Repo
          </a>
          <a
            href="https://codexintern.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Live Demo
          </a>
        </p>
      </div>
    </section>
  );
}
