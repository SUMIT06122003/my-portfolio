import React, { useEffect, useState } from "react";
import Profile from "../assets/profile.jpg";

const texts = ["Frontend", "Backend", "Fullstack Using MERN"];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    setText(texts[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <div
      id="who"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "120px 10% 60px",
        flexWrap: "wrap",
      }}
    >
      {/* Left Side - Text */}
      <div style={{ flex: 1, minWidth: "280px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Who I Am</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "20px" }}>
          Hello 👋 I’m <strong>Sumit Singh</strong>, a passionate{" "}
          <span style={{ color: "#4cafef", fontWeight: "bold" }}>{text}</span>{" "}
          developer.  
          I love building modern, scalable, and user-friendly applications using{" "}
          <strong>MERN Stack</strong> (MongoDB, Express, React, Node).  
          I also work with Firebase, Capacitor, REST APIs, and Git/GitHub for
          efficient development and deployment.
        </p>
      </div>

      {/* Right Side - Profile Image */}
      <div style={{ flex: "0 0 200px", textAlign: "center" }}>
        <img
          src={Profile}
          alt="Profile"
          style={{
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            objectFit: "cover",
            border: "4px solid #4cafef",
          }}
        />
      </div>
    </div>
  );
}
