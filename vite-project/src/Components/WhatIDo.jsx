import React from 'react';

function WhatIDo(props) {
    return (
        <div>
            <div className="WhatIDo_Container">
                <div className="Main">
                    <h1>What I Do</h1>
                </div>
                <div className="cardsContainer">
                    <div className="cards">
                        <div className="head"><h3>Web Develper</h3></div>
                        <div className="info"><p>I have Been Coding website past 2 years <br />with the skills of MERN Stack</p></div>
                    </div>
                    <div className="cards">
                        <div className="head"><h3>FreeLancer</h3></div>
                        <div className="info"><p>I Have Been Freelancing past 10 months <br />and i have made many Prokjects</p></div>
                    </div>
                    <div className="cards">
                        <div className="head"><h3>Problem Solver</h3></div>
                        <div className="info"><p>I Have Been Solving DSA Problems Formbr <br /> 2023 and I am pretty Good At it </p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatIDo;