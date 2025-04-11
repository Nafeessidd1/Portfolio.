import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => (
  <motion.section
    className="about-section"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <h2>About Me</h2>
    <p>
      My name is Nafees, and I am passionate about Machine Learning, Data Science, and Full Stack Development.
    </p>
    <p>
      I’m currently diving deep into full stack development using technologies like React.js, Node.js, Hono, Prisma, and NeonDB. I enjoy solving real-world problems through efficient backend systems and sleek frontend interfaces.
    </p>
    <p>
      My journey is all about continuous learning and building. Whether it’s designing intuitive user experiences or implementing scalable APIs, I’m always exploring better ways to craft solid and maintainable solutions.
    </p>
    <p>
      When I’m not coding, I enjoy exploring new tech, leveling up my skills, and staying curious about everything from software engineering best practices to cloud platforms like Azure and Docker.
    </p>
    <p>
      I’m excited about collaborating on meaningful projects, contributing to tech communities, and creating solutions that make a difference.
    </p>
  </motion.section>
);

export default About;

