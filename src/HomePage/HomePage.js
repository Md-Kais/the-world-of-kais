import React, { useState } from 'react';
import SidebarManual from '../Components/SidebarManual/SideIndex';
import NavbarManual from '../Components/NavbarManual/NavIndex';

import HomeSection from '../Components/HomeSection/HomeSection';

import About from '../Components/AboutPage/About/About';




import ProjectCard from '../Components/Project/ProjectCard/ProjectCard';
import Project from '../Components/Project/Project/Project';

import Blog from '../Components/Blog/Blog';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import BlogCard from '../Components/Blog/BlogCard/BlogCard';
import Resume from '../Components/Resume';
const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            
                <div>
                    <SidebarManual isOpen={isOpen} toggle={toggle}></SidebarManual>
                    <NavbarManual toggle={toggle}></NavbarManual>
                    {/* <AboutMe/>
           <Skill></Skill> */}
                    <HomeSection ></HomeSection>


                    <About ></About>
                    <Project></Project>
                    <ProjectCard></ProjectCard>
                    <Blog></Blog>
                    <BlogCard></BlogCard>
                    <Contact></Contact>
                    <Resume></Resume>
                    <Footer></Footer>
                    
                </div>
           
        </>

    )

};

export default HomePage;