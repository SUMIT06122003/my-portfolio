import React from "react";

// ✅ Import your certifications
import commonwealth from "../assets/certifications/commonwealth.png";
import newyork from "../assets/certifications/newyork.png";
import skyscanner from "../assets/certifications/skyscanner.png";
import internship from "../assets/certifications/Sumit Subhash Singh.pdf"; // Internship PDF

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

  const certContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    justifyContent: "center",
    alignItems: "stretch",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const certCard = {
    backgroundColor: "#1e1e1e",
    border: "1px solid #333",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "contain",
    marginBottom: "15px",
    borderRadius: "6px",
    background: "#fff",
  };

  const linkStyle = {
    display: "inline-block",
    marginTop: "10px",
    color: "#4cafef",
    fontWeight: "bold",
    textDecoration: "none",
  };

  const certifications = [
    {
      title: "Introduction to Software Engineering Job Simulation",
      org: "Commonwealth Bank (Forage)",
      img: commonwealth,
      link: commonwealth,
    },
    {
      title: "Software Engineering Job Simulation",
      org: "New York Jobs CEO Council (Forage)",
      img: newyork,
      link: newyork,
    },
    {
      title: "Front-End Software Engineering Job Simulation",
      org: "Skyscanner (Forage)",
      img: skyscanner,
      link: skyscanner,
    },
    {
      title: "Frontend Development Internship",
      org: "CodexIntern",
      img: null,
      link: internship, // PDF download
    },
  ];

  return (
    <section id="certifications" style={sectionStyle}>
      <h2 style={headingStyle}>Certifications</h2>

      <div style={certContainer}>
        {certifications.map((cert, index) => (
          <div key={index} style={certCard}>
            {cert.img && (
              <img src={cert.img} alt={cert.title} style={imgStyle} />
            )}
            <h3>{cert.title}</h3>
            <p>
              <strong>{cert.org}</strong>
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              📄 View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
