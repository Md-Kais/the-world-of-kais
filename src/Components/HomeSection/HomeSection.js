import React from 'react';
import Videomax from '../../Videos/video-0.jpg'
import { Typewriter } from 'react-simple-typewriter'
// import 'react-simple-typewriter/dist/index.css'
// import Typewriter from 'typewriter-effect';
import { ImFacebook } from 'react-icons/im'
import { GrInstagram, GrGithub } from 'react-icons/gr'
import { GrLinkedin } from 'react-icons/gr'

import { HomeBg, HomeP, HomeBtnWrap, HomeContainer, HomeContent, HomeH1, HomeH1max, SideBtnWrap, SidebarRoute, HideLinkTree, ShowLinkTree, HideFacebook } from './HomeSectionElement';
import './ButtonHover1.css';
import { FaTree } from 'react-icons/fa';
const HomeSection = () => {

    return (

        <HomeContainer >
            <HomeBg>

                <img src={Videomax} alt="Background" style={{ 'width': "100vw", "height": "100vh", "objectFit": 'cover', "background": "#232a34", " OObjectFit": 'cover' }} />
                {/* <source src={Videomax} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.

                </video> */}
                {

                }
            </HomeBg>

            <HomeContent className='screenFlex'>
                <HomeP>Hello World!</HomeP>
                <br />
                <HomeH1> I am Md. Kais</HomeH1>
                <br />
                <HomeH1max>
                    <Typewriter
                        loop
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1400}
                        words={['JavaScript  Developer', 'React  Developer', 'Redux  Developer', 'TypeScript Developer']}
                        onLoop={(loopCount) =>
                            console.log(`Just completed loop ${loopCount}`)
                        }


                    />
                </HomeH1max>
                <HomeBtnWrap>
                    <button className="glow-on-hover" type="button" onClick={() => window.open("https://drive.google.com/file/d/1qOhePVFctZicXLmMoiOjebhiDcU13O9A/view?usp=sharing", "_blank")}>Download CV</button></HomeBtnWrap>
                <br />
                <div className="hireMeHidden">
                    <a href=" https://www.linkedin.com/in/md-kais-7a976b1b0/" target="_blank" className='hire-me'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Hire Mee
                    </a>
                </div>
                <SideBtnWrap>
                    <HideFacebook>
                        <ShowLinkTree>
                            <SidebarRoute to={{ pathname: "https://web.facebook.com/kais.superb/" }} target="_blank" >
                                <ImFacebook />
                            </SidebarRoute> &nbsp; &nbsp;
                        </ShowLinkTree>
                    </HideFacebook>
                    <HideLinkTree>
                        <SidebarRoute to={{ pathname: "https://www.instagram.com/ice_in_kais/" }} target="_blank">
                            <GrInstagram />
                        </SidebarRoute>&nbsp; &nbsp;
                    </HideLinkTree>
                    <ShowLinkTree>
                        <SidebarRoute to={{ pathname: "https://www.github.com/Md-kais" }} target="_blank">
                            <GrGithub />
                        </SidebarRoute>&nbsp; &nbsp;
                    </ShowLinkTree>

                    <ShowLinkTree>
                        <SidebarRoute to={{ pathname: "https://www.linkedin.com/in/kais-md/" }} target="_blank" >
                            <GrLinkedin />
                        </SidebarRoute>&nbsp; &nbsp;
                    </ShowLinkTree>
                    <ShowLinkTree>
                        <SidebarRoute to={{ pathname: "https://linktr.ee/k_a_i_s" }} target="_blank">
                            <FaTree />
                        </SidebarRoute>
                    </ShowLinkTree>
                </SideBtnWrap>&nbsp;&nbsp;


            </HomeContent>
            <a href="#about-is-one">
                <div class="scroll-down"></div>
            </a>
        </HomeContainer >


    );
};

export default HomeSection;