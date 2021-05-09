import React from 'react';
import { CloseIcon,  Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SideBarElement';
import { ImFacebook } from 'react-icons/im'
import { GrInstagram, GrGithub } from 'react-icons/gr'
import { GrLinkedin } from 'react-icons/gr'
import { FaFacebook } from 'react-icons/fa';
const SidebarManual = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon >
                    </CloseIcon>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu> 
                        <SidebarLink to="about-is-one" activeClass="active" spy={true} smooth={true} offset={-80} duration={1400}onClick={toggle}>
                            About
                        </SidebarLink>
                        <SidebarLink to="project-is-one" activeClass="active" spy={true} smooth={true} offset={-80} duration={1400} onClick={toggle}>
                            Project
                        </SidebarLink>
                        <SidebarLink to="resume-is-one" activeClass="active" spy={true} smooth={true} offset={-80} duration={1400} onClick={toggle}>
                            Resume
                         </SidebarLink>
                        <SidebarLink to="blog-is-one" activeClass="active" spy={true} smooth={true} offset={-80} duration={1400} onClick={toggle}>
                            Blog
                        </SidebarLink>
                        <SidebarLink to="contact" activeClass="active" spy={true} smooth={true} offset={-80} duration={1400} onClick={toggle}>
                            Contact
                        </SidebarLink>


                    </SidebarMenu>
                    <SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to={{ pathname: "https://web.facebook.com/kais.superb/" }} target="_blank" >
                            <ImFacebook />
                        </SidebarRoute> &nbsp; &nbsp;
                        <SidebarRoute to={{ pathname: "https://www.instagram.com/ice_in_kais/" }} target="_blank">
                            <GrInstagram />
                        </SidebarRoute>&nbsp; &nbsp;
                        <SidebarRoute to={{ pathname: "https://www.github.com/Md-kais" }} target="_blank">
                            <GrGithub />
                        </SidebarRoute>&nbsp; &nbsp;
                        <SidebarRoute to={{ pathname: "https://www.linkedin.com/in/md-kais-7a976b1b0/" }} target="_blank" >
                            <GrLinkedin />
                        </SidebarRoute>
                    </SideBtnWrap>
                    </SidebarMenu>
                </SidebarWrapper>

            </SidebarContainer>

        </>
    );
};

export default SidebarManual;