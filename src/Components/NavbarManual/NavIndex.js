import React from 'react';
import { FaBars } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { GrInstagram, GrGithub } from 'react-icons/gr'
import { GrLinkedin } from 'react-icons/gr'
import { NavbarContainer, NavLogo, Nav, NavMenu, NavLinks, MobileIcon, NavItem,  NavBtn, NavBtnLink, SocialMenu } from './NavbarElement';
import logo from '../../Images/logo1.jpg'
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
                    <NavLogo to="/" onClick={toggleHome} style={{ display: 'flex', alignItems: 'center', padding: '0px', margin: '0px' }}><img style={{ cursor: 'pointer'}} src={logo} alt="Kais" width="100px" height="32.756px"/> </NavLogo>
                    
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about-is-one" activeClass="active" spy={true} smooth={true} offset={-80} duration={1400}><span></span>	<span></span><span></span><span></span>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="project-is-one" activeClass="active" spy={true} smooth={true} offset={-80} duration={1400}><span></span>	<span></span><span></span><span></span>Projects</NavLinks>
                        </NavItem>
                      
                        <NavItem>
                            <NavLinks to="blog-is-one" activeClass="active" spy={true} smooth={true}
                                offset={-80} duration={1400}><span></span>	<span></span><span></span><span></span>Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" activeClass="active" spy={true} smooth={true} offset={-80} duration={1400}><span></span>	<span></span><span></span><span></span>Contact</NavLinks>
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