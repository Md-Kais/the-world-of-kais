import React, { useState } from 'react';
import SidebarManual from '../Components/SidebarManual/SideIndex';
import NavbarManual from '../Components/NavbarManual/NavIndex';

import HomeSection from '../Components/HomeSection/HomeSection';
import AboutMe from '../Components/AboutPage/AboutMe/AboutMe';
import Skill from '../Components/AboutPage/Skill/Skill';
import About from '../Components/AboutPage/About/About';
const HomePage = () => {
    const [isOpen,setIsOpen]=useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    return (
        <div>
            
            <SidebarManual isOpen={isOpen} toggle={toggle}></SidebarManual>
            <NavbarManual toggle={toggle}></NavbarManual>
           {/* <AboutMe/>
           <Skill></Skill> */}
           <HomeSection></HomeSection>
           <About></About>
        </div>
    );
};

export default HomePage;