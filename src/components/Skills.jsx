import React from "react";

export default function Skills() {
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

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "30px",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const skillStyle = {
    backgroundColor: "#2a2a2a",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid #333",
    transition: "transform 0.3s ease",
  };

  const imgStyle = {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
    objectFit: "contain",
  };

  const skills = [
    { name: "React", logo: "/assets/react.png" },
    { name: "MongoDB", logo: "/logos/mongodb.png" },
    { name: "Express", logo: "/logos/express.png" },
    { name: "Node.js", logo: "/logos/node.png" },
    { name: "Firebase", logo: "/logos/firebase.png" },
    { name: "Capacitor", logo: "/logos/capacitor.png" },
    { name: "API", logo: "/logos/api.png" },
    { name: "Git", logo: "/logos/git.png" },
    { name: "GitHub", logo: "/logos/github.png" },
  ];

  return (
    <section id="skills" style={sectionStyle}>
      <h2 style={headingStyle}>My Skills</h2>
      <div style={gridStyle}>
        {skills.map((skill, index) => (
          <div
            key={index}
            style={skillStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img src={skill.logo} alt={skill.name} style={imgStyle} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
