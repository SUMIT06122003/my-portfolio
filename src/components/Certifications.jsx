import React from "react";

export default function Certifications() {
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

  const certStyle = {
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

  // Example certifications
  const certifications = [
    {
      title: "Frontend Development Internship",
      org: "CodexIntern",
      desc:
        "Completed a 1-month internship focusing on real-world frontend projects like building a site similar to Coding Ninjas.",
      link: "https://codexintern.netlify.app/",
    },
    {
      title: "JavaScript & React Training",
      org: "Online Platform / College",
      desc:
        "Completed structured training in JavaScript and React covering ES6, components, hooks, and project building.",
      link: "#", // Replace with actual certificate link
    },
    {
      title: "Firebase & Backend Development",
      org: "Self-Learning",
      desc:
        "Built multiple projects using Firebase, including authentication, real-time database, and backend APIs.",
      link: "#", // Replace with actual certificate link
    },
  ];

  return (
    <section id="certifications" style={sectionStyle}>
      <h2 style={headingStyle}>Certifications</h2>

      {certifications.map((cert, index) => (
        <div key={index} style={certStyle}>
          <h3>{cert.title}</h3>
          <p>
            <strong>{cert.org}</strong>
          </p>
          <p>{cert.desc}</p>
          {cert.link !== "#" && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              View Certificate
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
