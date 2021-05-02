import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Skill from './Skill/Skill';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutPage.css'
const AboutPage = () => {
    return (
            <div className="aboutpage">
            <div className="row">
                <div className="col-md-12 col-lg-6 m-0 p-0">
                    <AboutMe></AboutMe>
                </div>

                <div className="col-md-12 col-lg-6 m-0 p-0 skill-background-change">

                    <Skill></Skill>
                </div>

            </div>
        </div >

    );
};

export default AboutPage;