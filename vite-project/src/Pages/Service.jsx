import React from 'react';
import Footer  from '../Components/Footer';
const services = [
  {
    title: 'Full Stack Web Development',
    description:
      'I design and build modern, responsive web applications using React, Node.js, Express, MongoDB, and more.',
    icon: '🌐',
  },
  {
    title: 'UI/UX Design',
    description:
      'Creating intuitive and user-friendly interfaces that improve user experience with modern design tools.',
    icon: '🎨',
  },
  {
    title: 'Website Hosting',
    description:
      'Deploying and managing websites on cloud platforms like Vercel, Netlify, and Firebase.',
    icon: '🚀',
  },
  {
    title: 'Website Maintenance',
    description:
      'Providing ongoing support, updates, and optimizations to keep your site running smoothly.',
    icon: '🛠️',
  },
];

const Services = () => {
    return (
    <>
    <div className="services-container">
      <h1 className="services-title">My Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
          </div>
           
            </div>
            <Footer />
    </>
  );
};

export default Services;
