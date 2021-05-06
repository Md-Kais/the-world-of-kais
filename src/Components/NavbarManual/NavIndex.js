import React from 'react';
import { FaBars } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { GrInstagram, GrGithub } from 'react-icons/gr'
import { GrLinkedin } from 'react-icons/gr'
import { NavbarContainer, NavLogo, Nav, NavMenu, NavLinks, MobileIcon, NavItem,  NavBtn, NavBtnLink, SocialMenu } from './NavbarElement';

const NavbarManual = ({toggle}) => {
    var Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;
    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav>
            <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Kais</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="resume">Resume</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="blog">Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>


                    </NavMenu>
                    <SocialMenu>
                      
                            <NavBtn>
                                <NavBtnLink to={{ pathname: "https://web.facebook.com/kais.superb/" }} target="_blank">
                                    <ImFacebook />
                                </NavBtnLink>

                            </NavBtn>
                   
                        
                            <NavBtn>
                            <NavBtnLink to={{ pathname: "https://www.instagram.com/ice_in_kais/" }} target="_blank">
                                    <GrInstagram />
                                </NavBtnLink>

                            </NavBtn>
                       
                            <NavBtn>
                            <NavBtnLink to={{ pathname: "https://www.linkedin.com/in/md-kais-7a976b1b0/" }} target="_blank" >
                                    <GrLinkedin />
                                </NavBtnLink>

                            </NavBtn>
                       
                        <NavItem>
                            <NavBtn>
                                <NavBtnLink to={{ pathname: "https://www.github.com/Md-kais" }} target="_blank">
                                    <GrGithub />
                                </NavBtnLink>

                            </NavBtn>
                        </NavItem>


                    </SocialMenu>


                </NavbarContainer>
            </Nav>
        </>
    );
};

export default NavbarManual ;