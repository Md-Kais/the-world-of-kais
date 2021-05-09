import React from 'react';

import { FaBars } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { GrInstagram, GrGithub } from 'react-icons/gr'
import { GrLinkedin } from 'react-icons/gr'
import { SidebarMenu, SidebarRoute, SideBtnWrap } from '../SidebarManual/SideBarElement';
import './Footer.css'
const Footer = () => {
    return (
        <div>



           
            <footer className="site-footer">

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
         <a href="https://drive.google.com/file/d/1qOhePVFctZicXLmMoiOjebhiDcU13O9A/view" target="_blank" className="no-Margin"> &nbsp;	 Md. Kais</a>.</p>
          
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="https://web.facebook.com/kais.superb/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="github" href="https://www.github.com/Md-kais"  target="_blank"><i className="fa fa-github"></i></a></li>
                                <li><a className="instagram" href="https://www.instagram.com/ice_in_kais/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                <li><a className="linkedin" href="https://www.linkedin.com/in/md-kais-7a976b1b0/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="developer-name">
                    Developed by <a href="https://drive.google.com/file/d/1qOhePVFctZicXLmMoiOjebhiDcU13O9A/view" target="_blank" className="no-Margin">&nbsp;	&#10084; &nbsp;	 Md. Kais</a>
                    <br />
                </div>
            </footer>

         
        </div>
    );
};

export default Footer;



//  <footer className="site-footer foot">

//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-8 col-sm-6 col-xs-12">
//                             <p className="copyright-text" ><span style={{ color: '#fff' }}>Copyright &copy; {new Date().getFullYear()} All Rights Reserved by</span>  <a href="https://drive.google.com/file/d/1qOhePVFctZicXLmMoiOjebhiDcU13O9A/view" target="_blank"> &nbsp;<span></span>	<span></span><span></span><span></span> Md. Kais</a>.
//             </p>
//                         </div>

//                         <div className="col-md-4 col-sm-6 col-xs-12">
                          
//                                 <SideBtnWrap>
//                                     <SidebarRoute className="facebook" to={{ pathname: "https://web.facebook.com/kais.superb/" }} target="_blank" >
//                                     <span></span>	<span></span><span></span><span></span>  <ImFacebook />
//                                     </SidebarRoute> &nbsp; &nbsp;
//                         <SidebarRoute to={{ pathname: "https://www.instagram.com/ice_in_kais/" }} target="_blank">
//                                         <GrInstagram />
//                                     </SidebarRoute>&nbsp; &nbsp;
//                         <SidebarRoute to={{ pathname: "https://www.github.com/Md-kais" }} target="_blank">
//                                         <GrGithub />
//                                     </SidebarRoute>&nbsp; &nbsp;
//                         <SidebarRoute to={{ pathname: "https://www.linkedin.com/in/md-kais-7a976b1b0/" }} target="_blank" >
//                                         <GrLinkedin />
//                                     </SidebarRoute>
//                                 </SideBtnWrap>
                           
//                         </div>
//                         <div className="developer-name">
//                             Developed by <a href="https://drive.google.com/file/d/1qOhePVFctZicXLmMoiOjebhiDcU13O9A/view" target="_blank"> &nbsp;	 Md. Kais</a>
//                             <br />
//                         </div>
//                     </div>
//                 </div>

//             </footer> 