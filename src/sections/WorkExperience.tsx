import React from 'react';
import './WorkExperience.css';
import { FaBriefcase } from 'react-icons/fa';

const WorkExperience: React.FC = () => (
  <section className="work-section">
    <h2>Work Experience</h2>
    <div className="work-card">
      <FaBriefcase className="work-icon" />
      <div className="work-details">
        <h3>Frontend & Cloud Intern</h3>
        <p><strong>Company:</strong> Stacklane</p>
        <p><strong>Duration:</strong> March 2025 – Present</p>
        <p>
          Working on frontend development and cloud deployment strategies. Contributing to scalable UI components, integrating APIs, and learning practical DevOps practices using platforms like AWS and Azure.
        </p>
      </div>
    </div>
  </section>
);

export default WorkExperience;
