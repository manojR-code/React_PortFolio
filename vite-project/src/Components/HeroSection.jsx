import React from 'react';
import myImage from '../Images/eb5832ab-0f30-42a9-b23b-d7a4979d99a8.png'; // Adjust the path as necessary
function HeroSection(props) {
    return (
        <div>
            <div className="HeroSection">
                <div className="Image"><img src={myImage} alt="" /></div>
                <div className="Information">
                    <h4>Digital Art / Editorial Illustration
                        <br />Visual Identity / Digital Assets
                        <br />Environmental Design</h4>
                    <h6>Work With Me</h6>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;