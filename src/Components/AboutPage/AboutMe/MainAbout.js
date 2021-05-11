import React from 'react';

import { ImFacebook } from 'react-icons/im'
import { GrInstagram, GrGithub } from 'react-icons/gr'
import { GrLinkedin } from 'react-icons/gr'
import { NavItem, NavBtn, NavBtnLink, SocialMenu } from '../../NavbarManual/NavbarElement';
import './MainAbout.css';

const MainAbout = () => {
  
    return (
//  className="custom-subTitle center_all" style={{ paddingLeft: '5%' ,overflow:'hidden'}
        <div className="middle">
          <br/>
            <h5> First of all, I would love to introduce myself as a curious learner who always trying to learn something new.I am always ready to learn any technology or programming language.</h5>
           <br/>
            <h5>I am a MERN stack developer and have a good knowledge in JavaScript. I feel comfort to work with React.js and I also know Express.js CRUD operation and MongoDB Database Management.

             Besides, I know about C++ and Python. </h5>
            <br />
            <div className="before-I-forget-that">
                <h3>Email</h3>
             
                <a className="changeanchor" href="mailto:mdkais3@gmail.com">  <h5 style={{ color: 'aqua' }}>mdkais3@gmail.com</h5></a>
                  
               
            </div>
            <div className="gapp"></div>
            <div className="before-I-forget-that">
                <h3>Address</h3>
                <h5>Thakurgaon,Bangladesh</h5>
            </div>
            <div className="gapp"></div>
            <div className="before-I-forget-that">
                <h3>Education</h3>
                <h5>University of Chittagong</h5>
            </div>
             <div className="gapp"></div>
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

        </div>



    );
};

export default MainAbout;