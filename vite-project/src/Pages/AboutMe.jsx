import React from 'react';
import Footer from '../Components/Footer';
const AboutMe = () => {
    return (
      <>
    <div className="about-page">
      <div className="about-card">
        <div className="avatar">M</div>
        <h1 className="name">Manoj R</h1>
        <p className="description">
          I’m a BCA student at Bangalore University with a passion for full stack web development.
          I enjoy building clean, responsive, and modern web apps using React, Node.js, and other technologies.
        </p>
        <div className="info">
          <p><strong>📍</strong> Ramanagara, Bangalore South</p>
          <p><strong>📞</strong> +91 77950 61842</p>
          <p><strong>📧</strong> manoj170520055@gmail.com</p>
          <p><strong>🌐</strong> Kannada, Hindi, English</p>
              </div>
          </div>
      </div>
        <Footer />
      </>
  );
};

export default AboutMe;
