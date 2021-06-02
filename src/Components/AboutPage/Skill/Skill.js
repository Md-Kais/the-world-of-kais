import React from 'react';
import './Skill.css'
// const Progress = ({ done }) => {
//     const [style, setStyle] = React.useState({});

//     setTimeout(() => {
//         const newStyle = {
//             opacity: 1,
//             width: `${done}%`
//         }

//         setStyle(newStyle);
//     }, 200);

//     return (
//         <div className="progress">
//             <div className="progress-done" style={style}>
//                 {done}%
// 			</div>
//         </div>
//     )
// }

const Skill = () => {
    return (
        <div className="middle">

            <div className="before-I-forget-that">
                <h3>Programming Languages</h3>
                <div style={{ display: "flex", flexFlow: 'row wrap' }}>
                    <h6 className="button-type-h6">JavaScript</h6>
                    <h6 className="button-type-h6">C++</h6>
                    <h6 className="button-type-h6">TypeScript</h6>
                    <h6 className="button-type-h6">Python</h6>
                    <h6 className="button-type-h6">HTML</h6>
                    <h6 className="button-type-h6">CSS</h6>
                    
                </div>
            </div>
            <div className="gapp"></div>
            <div className="before-I-forget-that">
                <h3>Front-End Technologies</h3>
                <div style={{ display: "flex", flexFlow: 'row wrap' }}>
                    <h6 className="button-type-h6">React.JS</h6>
                    <h6 className="button-type-h6">Vue.JS</h6>
                    <h6 className="button-type-h6">Redux.JS</h6>
                    <h6 className="button-type-h6">Next.JS</h6>
                    <h6 className="button-type-h6">Bootstrap</h6>
                    <h6 className="button-type-h6">Material-UI</h6>
                    <h6 className="button-type-h6">React Native</h6>

                </div>
            </div>
            <div className="gapp"></div>

            <div className="before-I-forget-that">
                <h3>Back-End Technologies</h3>
                <div style={{ display: "flex", flexFlow: 'row wrap' }}>
                    <h6 className="button-type-h6">Node.JS</h6>
                    <h6 className="button-type-h6">Django</h6>
                    <h6 className="button-type-h6">Express.JS</h6>
                </div></div> <div className="gapp"></div>
            <div className="before-I-forget-that">
                <h3>DataBase</h3>
                <div style={{ display: "flex", flexFlow: 'row wrap' }}>
                    <h6 className="button-type-h6">MongoDB</h6>
                    <h6 className="button-type-h6">Mongoose</h6>

                </div></div> <div className="gapp"></div>
            <div className="before-I-forget-that">
                <h3>Tools</h3>
                <div style={{ display: "flex", flexFlow: 'row wrap' }}>
                    <h6 className="button-type-h6">Git</h6>
                    <h6 className="button-type-h6">CLI</h6>
                    <h6 className="button-type-h6">VSCODE</h6>
                    <h6 className="button-type-h6">Heroku</h6>
                    <h6 className="button-type-h6">Firebase</h6>
                    <h6 className="button-type-h6">Netlify</h6>

                </div>
            </div> <div className="gapp"></div>


        </div>
    )
};

export default Skill;



// {/* <div className="progresskept">
//     <h2 className="headline" style={{ color: "#fff", margin: '50px' }}><span style={{ color: "#F2709C" }}>____________</span>
//         <span style={{ color: "#fff" }}>My Skill</span></h2>
//     <div height="100%" width="50%" style={{ color: '#fff' }}></div>

//     <div >
//         <div className="inlineStyle">
//             <h6 >JavaScript</h6>
//             <h6 >90%</h6>

//         </div>
//         <Progress done="90" />
//     </div>
//     <div >
//         <div className="inlineStyle">
//             <h6 >C++</h6>
//             <h6 >80%</h6>

//         </div>
//         <Progress done="80" />
//     </div>
//     <div >
//         <div className="inlineStyle">
//             <h6 >React</h6>
//             <h6 >70%</h6>

//         </div>
//         <Progress done="70" />
//     </div>
//     <div >
//         <div className="inlineStyle">
//             <h6 >Redux</h6>
//             <h6 >60%</h6>

//         </div>
//         <Progress done="60" />
//     </div>
//     <div >
//         <div className="inlineStyle">
//             <h6 >HTML & CSS</h6>
//             <h6 >100%</h6>

//         </div>
//         <Progress done="100" />
//     </div>
//     <div >
//         <div className="inlineStyle">
//             <h6 >Vue</h6>
//             <h6 >50%</h6>

//         </div>
//         <Progress done="50" />
//     </div>
//     <div >
//         <div className="inlineStyle">
//             <h6 >SCSS</h6>
//             <h6 >60%</h6>

//         </div>
//         <Progress done="60" />
//     </div>


// </div>
//     ); */}