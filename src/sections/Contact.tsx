import React from 'react';
import './Contact.css';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => (
  <section className="contact-section">
    <h2>Contact</h2>
    <ul>
      <li>
        <FaEnvelope /> Email: <a href="mailto:.nafeess.1si21ad035@gmail.com">nafeess.1si21ad035@gmail.com</a>
      </li>
      <li>
        <FaInstagram /> Instagram: <a href="https://instagram.com/nafees1" target="_blank" rel="noopener noreferrer"></a>
      </li>
      <li>
        <FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/ari" target="_blank" rel="noopener noreferrer"></a>
      </li>
    </ul>
  </section>
);

export default Contact;
