import React, { useState, useEffect } from "react";

export default function Header() {
  const [active, setActive] = useState("who");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["who", "skills", "experience", "projects", "contact"];
      let current = "who";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 150) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#1e1e1e",
        padding: "15px 5%",
        display: "flex",
        justifyContent: "center", // 👈 center everything
        alignItems: "center",
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
        gap: "50px", // space between logo & nav
      }}
    >
      <h1 style={{ color: "#4cafef", fontSize: "22px", margin: 0 }}>
        Sumit Singh
      </h1>

      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "40px",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          {["who", "skills", "experience", "projects", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                style={{
                  color: active === id ? "#4cafef" : "#fff",
                  fontWeight: active === id ? "bold" : "normal",
                  textDecoration: active === id ? "underline" : "none",
                  transition: "color 0.3s ease",
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
