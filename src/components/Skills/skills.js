import React from 'react';
import './skills.css';
import Cplusplus from '../../assets/CLogo.png';
import CSS from '../../assets/CSSLogo.png';
import HTML from '../../assets/HTMLLogo.png';
import Java from '../../assets/javaLogo.png';
import MATLAB from '../../assets/MATLABLogo.png';
import Python from '../../assets/python.png';

const Skills = () => {
    return (
        <section id="skills">
            <div className="skillsContent">
                <p className="skillsHeader">/ Skills<span className="dash"> </span></p>
                <div className="row">
                    <div className="column">
                        <img src={Python} alt="python" className="python-logo" />
                        <img src={Cplusplus} alt="C++" className="c-logo" />
                        <img src={Java} alt="java" className="java-logo" />
                    </div>
                    <div className="column">
                        <img src={HTML} alt="html" className="html-logo" />
                        <img src={CSS} alt="css" className="css-logo" />
                        <img src={MATLAB} alt="matlab" className="matlab-logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;