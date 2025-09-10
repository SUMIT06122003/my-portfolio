import React from "react";
import { FaPhone, FaLinkedin, FaEnvelope, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        textAlign: "center",
        padding: "80px 20px",
        backgroundColor: "#121212",
      }}
    >
      <h2 style={{ marginBottom: "40px", fontSize: "28px", color: "#4cafef" }}>
        Contact Me
      </h2>

      {/* Phone */}
      <div
        style={{
          marginBottom: "20px",
          fontSize: "18px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <FaPhone color="green" size={22} />
        <span>+91 9967021767</span>
      </div>

      {/* LinkedIn */}
      <div
        style={{
          marginBottom: "20px",
          fontSize: "18px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <FaLinkedin color="#0A66C2" size={22} />
        <a
          href="https://www.linkedin.com/in/sumit-singh-607014372"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          LinkedIn
        </a>
      </div>

      {/* Email */}
      <div
        style={{
          marginBottom: "20px",
          fontSize: "18px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <FaEnvelope color="red" size={22} />
        <a
          href="mailto:sunnysumit2003@gmail.com"
          style={{ color: "white", textDecoration: "none" }}
        >
          sunnysumit2003@gmail.com
        </a>
      </div>

      {/* Instagram Freelance Page */}
      <div
        style={{
          marginBottom: "20px",
          fontSize: "18px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <FaInstagram color="#E1306C" size={22} />
        <a
          href="https://www.instagram.com/freelance.sumit/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          Freelance Page
        </a>
      </div>

      {/* Instagram ID */}
      <div
        style={{
          marginBottom: "20px",
          fontSize: "18px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <FaInstagram color="#E1306C" size={22} />
        <a
          href="https://www.instagram.com/sumit.singh.0612/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          @sumit.singh.0612
        </a>
      </div>

      {/* GitHub */}
      <div
        style={{
          marginBottom: "20px",
          fontSize: "18px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <FaGithub color="#6e40c9" size={22} />
        <a
          href="https://github.com/SUMIT06122003"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
