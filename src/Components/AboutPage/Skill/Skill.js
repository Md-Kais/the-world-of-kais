import React from 'react';
import './Skill.css'
const Progress = ({ done }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    return (
        <div className="progress">
            <div className="progress-done" style={style}>
                {done}%
			</div>
        </div>
    )
}

const Skill = () => {
    return (
        <div className="progresskept spaceKeep">
            <h2 className="headline" style={{ color: "#fff", margin: '50px' }}><span style={{ color:"#F2709C"}}>____________</span>
                <span style={{ color: "#fff" }}>My Skill</span></h2>
            <div height="100%" width="50%" style={{ color: '#fff' }}></div>
        
            <div >
                <div className="inlineStyle">
                    <h5 >JavaScript</h5>
                    <h5 >90%</h5>

                </div>
                <Progress done="90" />
            </div>
            <div >
                <div className="inlineStyle">
                    <h5 >C++</h5>
                    <h5 >80%</h5>

                </div>
                <Progress done="80" />
            </div>
            <div >
                <div className="inlineStyle">
                    <h5 >React</h5>
                    <h5 >70%</h5>

                </div>
                <Progress done="70" />
            </div>
            <div >
                <div className="inlineStyle">
                    <h5 >Redux</h5>
                    <h5 >60%</h5>

                </div>
                <Progress done="60" />
            </div>
            <div >
                <div className="inlineStyle">
                    <h5 >HTML & CSS</h5>
                    <h5 >100%</h5>

                </div>
                <Progress done="100" />
            </div>
            <div >
                <div className="inlineStyle">
                    <h5 >Vue</h5>
                    <h5 >50%</h5>

                </div>
                <Progress done="50" />
            </div>
            <div >
                <div className="inlineStyle">
                    <h5 >SCSS</h5>
                    <h5 >60%</h5>

                </div>
                <Progress done="60" />
            </div>
            
          
        </div>
    );
};

export default Skill;