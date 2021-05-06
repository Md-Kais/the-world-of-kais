import React, { useState } from 'react';
import SidebarManual from '../Components/SidebarManual/SideIndex';
import NavbarManual from '../Components/NavbarManual/NavIndex';

import HomeSection from '../Components/HomeSection/HomeSection';
import AboutMe from '../Components/AboutPage/AboutMe/AboutMe';
import Skill from '../Components/AboutPage/Skill/Skill';
import About from '../Components/AboutPage/About/About';
import ContactForm from '../Components/Contact/Contact';
import Blog from '../Components/Blog/Blog/Blog';
import BlogCard from '../Components/Blog/BlogCard/BlogCard';
import ProjectCard from '../Components/Project/ProjectCard/ProjectCard';
import Project from '../Components/Project/Project/Project';
const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>

            <SidebarManual isOpen={isOpen} toggle={toggle}></SidebarManual>
            <NavbarManual toggle={toggle}></NavbarManual>
            {/* <AboutMe/>
           <Skill></Skill> */}
            <HomeSection ></HomeSection>
            
            <About path='about'></About>
            <Project path='projects'></Project>
            <ProjectCard></ProjectCard>
            <Blog></Blog>
            <BlogCard></BlogCard>

            <ContactForm></ContactForm>
        </div>
    );
};

export default HomePage;