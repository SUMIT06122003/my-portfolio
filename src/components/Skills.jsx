import React from "react";
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import mongoLogo from "../assets/mongodb.png";
import expressLogo from "../assets/express.png";
import firebaseLogo from "../assets/firebase.png";
import capacitorLogo from "../assets/capacitor.png";
import apiLogo from "../assets/api.svg";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";

const skills = [
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "MongoDB", logo: mongoLogo },
  { name: "Express", logo: expressLogo },
  { name: "Firebase", logo: firebaseLogo },
  { name: "Capacitor", logo: capacitorLogo },
  { name: "API", logo: apiLogo },
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
];

export default function Skills() {
  return (
    <div
      id="skills"
      style={{ textAlign: "center", padding: "60px 10%", background: "#1e1e1e" }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "40px" }}>My Skills</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "30px",
          justifyItems: "center",
        }}
      >
        {skills.map((skill) => (
          <div key={skill.name} style={{ textAlign: "center" }}>
            <img
              src={skill.logo}
              alt={skill.name}
              style={{ width: "60px", height: "60px", marginBottom: "10px" }}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
