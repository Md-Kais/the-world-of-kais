import React from 'react';

const Resume = () => {
    return (
        <div style={{ textDecoration: 'none',display:'flex',justifyContent:'center',alignItems:'center' ,margin:'0 auto'}} id="resume-is-one" className="glow-on-hover check">
            <a href="/ResumeFile/Kais_Resume.pdf" target="_blank" download style={{ margin: 'auto 0',color:"#fff",textDecoration:'none'}}>Download CV</a>
        </div>
    );
};

export default Resume;