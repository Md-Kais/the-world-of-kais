import React from 'react';
import Videomax from '../../Videos/videomaxpro.mp4'
import Typewriter from 'typewriter-effect';
import { ImFacebook } from 'react-icons/im'
import { GrInstagram, GrGithub } from 'react-icons/gr'
import { GrLinkedin } from 'react-icons/gr'

import { HomeBg,HomeP, HomeBtnWrap, HomeContainer, HomeContent, HomeH1, HomeH1max, SideBtnWrap, SidebarRoute } from './HomeSectionElement';
import './ButtonHover1.css'
const HomeSection = () => {

    return (
        <HomeContainer >
            <HomeBg>
                
                <video loop autoPlay style={{ 'width': "100%", "height": "100%", "objectFit": 'cover', "background": "#232a34", " OObjectFit": 'cover' }}>
                    <source src={Videomax} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
   
            </video>
            </HomeBg>
          
            <HomeContent className='screenFlex'>
                <HomeP>Hello World!</HomeP>
                <br/>
                <HomeH1> I am Md. Kais</HomeH1>
                <br/>
                <HomeH1max>
                    <Typewriter
                        options={{
                            strings: ['JavaScript  Developer', 'React  Developer','Redux  Developer', 'TypeScript Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </HomeH1max>
                <HomeBtnWrap>  
                    <button className="glow-on-hover" type="button" onClick={() => window.open("https://drive.google.com/file/d/1qOhePVFctZicXLmMoiOjebhiDcU13O9A/view?usp=sharing", "_blank")}>Download CV</button></HomeBtnWrap>
                    <br/>
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
                
              
            </HomeContent>

          
           
        </HomeContainer>
    );
};

export default HomeSection;