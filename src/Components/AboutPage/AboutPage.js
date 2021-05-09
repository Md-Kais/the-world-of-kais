import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Skill from './Skill/Skill';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutPage.css'
import ParticleBackground from '../../ParticleBackgroud';
const AboutPage = () => {
    return (
        <div className="aboutpage">
           <div className="head-middle">
                <h2 style={{ color:'#6ead76'}}>Want to know?</h2>
             
               <h1>Who am I?</h1>
           </div>
                <div className="row">



                    <div className="col-md-12 col-lg-6 pl-5 pr-4">
                        <AboutMe></AboutMe>
                    </div>
                    <div className="col-md-12 col-lg-6 pl-5 pr-4">
                        <Skill></Skill>
                    </div>
                </div>
           

        </div >

    );
};

export default AboutPage;