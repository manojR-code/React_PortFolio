import React, { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import DarkCommentingApp from '../Images/Untitled design.png'; 
import DatingApp from '../Images/Untitled design (1).png';
import Ecommerce from '../Images/Untitled design (2).png';
import BallCatching from '../Images/Untitled design (3).png';
import Footer from '../Components/Footer';

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: 'Dark Commenting App',
      description: 'A Dark Commenting App is a web application that allows users to leave comments on various topics in a dark-themed interface.',
      link: DarkCommentingApp
    },
    {
      title: 'Dating Application',
      description: 'A personalized dating application that connects users based on their interests and preferences.',
      link: DatingApp
    },
    {
      title: 'E Commerce Website',
      description: 'An E Commerce Website is an online platform that allows users to buy and sell products or services.',
      link: Ecommerce
    },
    {
      title: 'Ball Catching Game',
      description: 'A fun and interactive ball catching game where players catch falling balls to score points. Made Purely with HTML, CSS, and JavaScript.',
      link: BallCatching
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <Box width={280}>
              {loading ? (
                <>
                  <Skeleton
                    variant="rectangular"
                    width={280}
                    height={280}
                    animation="wave"
                    sx={{ bgcolor: '#333' }} // Ensures visibility on dark background
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: '1.2rem', bgcolor: '#333', mt: 1 }}
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    width="60%"
                    sx={{ bgcolor: '#333' }}
                    animation="wave"
                  />
                </>
              ) : (
                <img src={project.link} alt={project.title} className="project-image" />
              )}
            </Box>
            {!loading && <p>{project.description}</p>}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
