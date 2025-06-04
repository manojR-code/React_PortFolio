import React from "react";
import HotelImage from "../Images/Hotel Management application.jpg"; 
import SocialMedia from "../Images/Social Media app.jpg"; 
import FreeLancing from "../Images/FreeLancer.jpg"; 
const HeroSection = () => {
  return (
    <section className="hero-section">
      <h2 className="hero-title">My Work</h2>
      <div className="work-grid">
        <div className="work-card">
          <img
            src={HotelImage}
            alt="Intentional Design"
            className="work-image"
          />
          <div className="work-caption"><h2>Hotel Management Application</h2></div>
        </div>
        <div className="work-card">
          <img
            src={SocialMedia}
            alt="Symbolism & Pattern"
            className="work-image"
          />
          <div className="work-caption"><h2>Social Media Application</h2></div>
        </div>
        <div className="work-card">
          <img
            src={FreeLancing}
            alt="Fun & Functional Branding"
            className="work-image"
          />
          <div className="work-caption"><h2>FreeLancer</h2></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
