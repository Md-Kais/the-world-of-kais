import React from 'react';
import ParticleBackground from '../../../ParticleBackgroud';
import './AboutMe.css'
import MainAbout from './MainAbout';
const AboutMe = () => {
    return (
        <>
        <div className="aboutme">
               
                
            <div className="middleMainAbout">
                    <MainAbout ></MainAbout>
            </div>

            <div className="part">
                    <ParticleBackground ></ParticleBackground>
            </div>


        </div>
        </>
    );
};

export default AboutMe;