import React, { useState, useEffect } from "react";

export default function Header() {
  const [active, setActive] = useState("who");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect active section + hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "who",
        "skills",
        "experience",
        "projects",
        "certifications",
        "contact",
      ];
      let current = "who";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 150) {
          current = id;
        }
      });

      setActive(current);

      // Hide/show header
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      style={{
        position: "fixed",
        top: visible ? 0 : "-80px",
        left: 0,
        width: "100%",
        backgroundColor: "#1e1e1e",
        padding: "15px 8%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
        transition: "top 0.3s ease-in-out",
      }}
    >
      {/* ✅ Name on the left, clickable */}
      <a
        href="#who"
        style={{
          color: "#4cafef",
          fontSize: "22px",
          margin: 0,
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Sumit Singh
      </a>

      {/* ✅ Navigation in the center */}
      <nav style={{ flex: 1, display: "flex", justifyContent: "center" }}>
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
          {[
            "who",
            "skills",
            "experience",
            "projects",
            "certifications",
            "contact",
          ].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                style={{
                  color: active === id ? "#4cafef" : "#fff",
                  fontWeight: active === id ? "bold" : "normal",
                  textDecoration: active === id ? "underline" : "none",
                  transition: "0.3s",
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
