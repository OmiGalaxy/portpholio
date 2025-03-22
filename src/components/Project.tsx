import React from "react";
import mockA from '../assets/images/mockA.jpg';
import mockB from '../assets/images/mockB.jpg';
import mockC from '../assets/images/mockC.jpg';
import mockD from '../assets/images/mockD.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href={mockC} target="_blank" rel="noreferrer"><img src={mockA} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={mockC} target="_blank" rel="noreferrer"><h2>GPS tracking system using Arduino nano</h2></a>
                <p>Tracking the location of that device at any time and anywhere by sending sms gsm to mobile phone.</p>
            </div>
            <div className="project">
                <a href={mockD} target="_blank" rel="noreferrer"><img src={mockB} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href={mockD} target="_blank" rel="noreferrer"><h2>Wireless Fire fighting robot</h2></a>
                <p>A wireless firefighting robot is a remotely operated device designed to detect and extinguish fires. This project aims to enhance safety and efficiency in fire emergencies by minimizing human risk.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
