import React from "react";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-list">
        <a href="tel:+919967021767">
          <FaPhoneAlt size={22} color="#4caf50" /> +91 9967021767
        </a>

        <a
          href="https://www.linkedin.com/in/sumit-singh-607014372"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={22} color="#0077B5" /> LinkedIn
        </a>

        <a href="mailto:sunnysumit2003@gmail.com">
          <FaEnvelope size={22} color="#EA4335" /> sunnysumit2003@gmail.com
        </a>

        <a
          href="https://www.instagram.com/freelance.sumit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={22} color="#E4405F" /> Freelance Page
        </a>

        <a
          href="https://www.instagram.com/sumit.singh.0612/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={22} color="#E4405F" /> @sumit.singh.0612
        </a>
      </div>
    </section>
  );
}
