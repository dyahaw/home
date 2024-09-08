import React from 'react';
import './AboutMe.css';  // Pastikan path ini sesuai dengan struktur proyekmu
import profilePhoto from '../assets/images/dyahayuw.jpg'; // Ganti dengan path yang sesuai
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import ikon yang diperlukan

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img src={profilePhoto} alt="Profile" className="about-me-photo" />
      <div className="about-me-content">
        <h2>About Me</h2>
        <p>
          Hello! My name is Dyah Ayu Wulandari
        </p>
        <p>
        I am a fresh graduate of Informatics Engineering at Universitas Brawijaya
        who is knowledgeable in machine learning and data analytics through tools
        such as Google BigQuery, Tableau, Google Data Studio, and Microsoft Excel.
        While my project experiences mainly revolve around data science, I'm also interested
        in business analytics and business intelligence which involves the application of data science.
        </p>
        <p>
          My portofolio link: <a href="https://www.canva.com/design/DAGPBHb4yq8/D_Zcau9vTmAHI6nHIuODmA/view?utm_content=DAGPBHb4yq8&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer">Check it out here</a>
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/dyahayuw" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/dyahaw" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="social-icon" />
          </a>
          <a href="ayuwulandaridyah1@gmail.com" aria-label="Email">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
