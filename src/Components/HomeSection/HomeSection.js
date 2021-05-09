import React from 'react';
import Videomax from '../../Videos/videomaxpro.mp4'
import Typewriter from 'typewriter-effect';
import { HomeBg,HomeP, HomeBtnWrap, HomeContainer, HomeContent, HomeH1, HomeH1max, VideoBg } from './HomeSectionElement';
import './ButtonHover1.css'
const HomeSection = () => {

    return (
        <HomeContainer >
            <HomeBg>
                {/* <VideoBg autoplay loop muted src={Videomax} type='video/mp4' /> */}
                <video loop autoPlay style={{ 'width': "100%", "height": "100%", "object-fit": 'cover', "background": "#232a34", "-o-object-fit": 'cover' }}>
                    <source src={Videomax} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
   
            </video>
            </HomeBg>
            <HomeContent>
                <HomeP>Hello World!</HomeP>
                <br/>
                <HomeH1> I am Md. Kais</HomeH1>
                <br/>
                <HomeH1max>
                    <Typewriter
                        options={{
                            strings: ['JavaScript  Developer', 'React  Developer','Redux  Developer', 'UI/UX  Designer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </HomeH1max>
                <HomeBtnWrap>  
                    <button class="glow-on-hover" type="button" onClick={() => window.open("https://drive.google.com/file/d/1qOhePVFctZicXLmMoiOjebhiDcU13O9A/view?usp=sharing", "_blank")}>Download CV</button></HomeBtnWrap>
                    <br/>
                <a href=" https://www.linkedin.com/in/md-kais-7a976b1b0/" target="_blank" className='hire-me'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                Hire Mee
             </a>
            </HomeContent>

               
           
        </HomeContainer>
    );
};

export default HomeSection;