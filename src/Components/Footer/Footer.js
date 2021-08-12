import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer className="site-footer">

                <div className="container">
                    <div className="row screenResizer">
                        <div className="col-md-6 col-sm-12">
                            <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
                                <a href="https://drive.google.com/file/d/1qOhePVFctZicXLmMoiOjebhiDcU13O9A/view" target="_blank" alt="resume" className="no-Margin" rel="noreferrer"> &nbsp;	 Md. Kais</a></p>

                        </div>

                        <div className="col-md-6 col-sm-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="https://web.facebook.com/kais.superb/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" alt="facebook"></i></a></li>
                                <li><a className="github" href="https://www.github.com/Md-kais" target="_blank" alt="github" rel="noreferrer"><i className="fa fa-github"></i></a></li>
                                <li><a className="instagram" href="https://www.instagram.com/ice_in_kais/" target="_blank" alt="instagram" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
                                <li><a className="linkedin" href="https://www.linkedin.com/in/md-kais-7a976b1b0/" target="_blank" alt="linkedIn" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                                <li><a className="linktree" href="https://linktr.ee/k_a_i_s" target="_blank" alt="linktree" rel="noreferrer"><i className="fa fa-tree"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="developer-name">
                    Developed by <a href="https://drive.google.com/file/d/1qOhePVFctZicXLmMoiOjebhiDcU13O9A/view" target="_blank" alt="resume" className="no-Margin" rel="noreferrer">&nbsp;	&#10084; &nbsp;	 Md. Kais</a>
                    <br />

                </div>
            </footer>


        </div>
    );
};

export default Footer;



