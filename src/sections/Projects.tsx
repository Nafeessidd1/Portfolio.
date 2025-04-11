import React from 'react';
import './Projects.css';
import { FaCamera, FaVoteYea, FaLock, FaShoppingCart } from 'react-icons/fa';

const Projects: React.FC = () => (
  <section className="projects-section">
    <h2>Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <FaCamera className="project-icon" />
        <h3>Image Forgery Detection</h3>
        <p>
          A deep learning-based system using Error Level Analysis (ELA) and Convolutional Neural Networks (CNN) to detect manipulated or forged images.
        </p>
      </div>
      <div className="project-card">
        <FaVoteYea className="project-icon" />
        <h3>InstantVoteStream</h3>
        <p>
          A secure and real-time voting system built using Django that ensures fast vote casting and counting, suitable for online elections and polls.
        </p>
      </div>
      <div className="project-card">
        <FaLock className="project-icon" />
        <h3>SecurifyAI - Smart CCTV</h3>
        <p>
          A smart surveillance system leveraging YOLO object detection to track violations and suspicious activities in real-time from CCTV footage.
        </p>
      </div>
      <div className="project-card">
        <FaShoppingCart className="project-icon" />
        <h3>E-Commerce Website</h3>
        <p>
          A complete shopping website with product listings, cart functionality, and user authentication — built using modern web technologies for seamless UX.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
