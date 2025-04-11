import React from 'react';
import './Interests.css';
import { FaLaptopCode, FaBrain, FaServer } from 'react-icons/fa';

const Interests: React.FC = () => (
  <section className="interests-section">
    <h2>Interests</h2>
    <div className="interests-cards">
      <div className="interest-card">
        <FaBrain className="interest-icon" />
        <h3>Machine Learning & Data Science</h3>
        <p>
          I’m passionate about using data to solve real-world problems. I love working on ML models, data pipelines, and experimenting with deep learning and NLP.
        </p>
      </div>
      <div className="interest-card">
        <FaLaptopCode className="interest-icon" />
        <h3>Full Stack Development</h3>
        <p>
          I build robust applications using modern stacks like React, Node.js, Hono, Prisma, and NeonDB. I enjoy crafting both seamless UIs and scalable APIs.
        </p>
      </div>
      <div className="interest-card">
        <FaServer className="interest-icon" />
        <h3>System Design & Cloud</h3>
        <p>
          I’m interested in designing scalable systems and exploring cloud platforms like Azure. I also enjoy learning about Docker, DevOps, and deployment workflows.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;
