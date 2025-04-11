import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    © {new Date().getFullYear()} Nafees. All rights reserved.
  </footer>
);

export default Footer;