import React from 'react';
import Image from "../Images/freelance creative.png";
function DarkImage(props) {
    return (
        <div>
            <div className="Image_container">
                <img src={Image} alt="" />
                <div className="Container_DarkImage">
                <div className="info" ><h1>Let'S Collabrate And Make Great Projects.</h1></div>
                </div>
           </div>
        </div>
    );
}

export default DarkImage;